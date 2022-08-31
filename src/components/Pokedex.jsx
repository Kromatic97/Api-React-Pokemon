import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setpokeSearch] = useState()

  useEffect(() => {
    let URL
    if(pokeSearch){
      const url =`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results:[
          {
          url
          }
      ]
      }
      setPokemons(obj)

    } else {
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
    }
 }, [pokeSearch])

  const nameTrainer = useSelector(state => state.nameTrainer)
  
  return (
    <div>
      <h1 className='title'>Welcome {nameTrainer}, Catch them all</h1>
      <SearchInput setpokeSearch={setpokeSearch}/>

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