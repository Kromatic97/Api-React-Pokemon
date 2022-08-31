import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const PokemonDetails = () => {
  const [pokeInfo, setPokeInfo] = useState()
  const {name} = useParams ()
  
  useEffect(() => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}/`
    axios.get(URL)
    .then(res => setPokeInfo(res.data))
    .catch(err => console.log(err))
  }, [])
  

  return (
    <article>
      <h1>You Pokemon Select is: {name} </h1>
      <img src={pokeInfo?.sprites.other['official-artwork'].
      front_default} alt="" />
      
    </article>
  )
}

export default PokemonDetails