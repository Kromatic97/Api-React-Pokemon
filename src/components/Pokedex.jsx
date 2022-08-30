import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()

  useEffect(() => {
    const URL = 'https://pokeapi.co/api/v2/pokemon'
   axios.get(URL)
   .then(res => setPokemons(res.data))
   .catch(err => console.log(err))
  }, [])

  const nameTrainer = useSelector(state => state.nameTrainer)
  
  return (
    <div>
      <h1 className='title'>Welcome {nameTrainer}, Catch them all</h1>
      <div className='cards-container'>
          {
            pokemons?.results.map( pokemon => (
              <PokemonCard 
              key={pokemon.url}
              url={pokemon.url}/>
            ))
          }
      </div>
    </div>
  )
}

export default Pokedex