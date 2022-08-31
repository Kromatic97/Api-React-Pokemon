import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokemonCard from './Pokedex/PokemonCard'
import SearchInput from './Pokedex/SearchInput'
import SelectType from './Pokedex/SelectType'

const Pokedex = () => {

  const [pokemons, setPokemons] = useState()
  const [pokeSearch, setPokeSearch] = useState()
 const [optionType, setOptionType] = useState('All')





  useEffect(() => {
    if(optionType !== 'All'){
        //Aqui se realiza la logica cuando el usuario quiere filtrar por tipo//
        const URL = `https://pokeapi.co/api/v2/type/${optionType}/`
        axios.get(URL)
        .then(res => {
        const arr = res.data.pokemon.map(e => e.pokemon)
        setPokemons({results:arr})
      })
      .catch(err => console.log(err))
      
      
    } else if(pokeSearch){
      const url =`https://pokeapi.co/api/v2/pokemon/${pokeSearch}`
      const obj = {
        results:[{url}]
      }
      setPokemons(obj)

    } else {
      //Aqui se hace la logica cuando el usuario quieretodos los pokemons//
      const URL = 'https://pokeapi.co/api/v2/pokemon'
      axios.get(URL)
      .then(res => setPokemons(res.data))
      .catch(err => console.log(err))
    }
 }, [pokeSearch, optionType])





  const nameTrainer = useSelector(state => state.nameTrainer)
  
  return (
    <div>
      <div className='home_title1'></div>
      <div className='home_title2'></div>
      <img className='home__img' src="./images/pokedex.png" alt="" />
      <h1 className='title'>Welcome {nameTrainer}, Catch them all</h1>
     <div className='search__principal'>
      <SearchInput setPokeSearch={setPokeSearch} setOptionType={setOptionType}/>
      <SelectType className='selectType' optionType={optionType} 
                  setOptionType={setOptionType} 
                  setPokeSearch={setPokeSearch}/>
     </div>

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