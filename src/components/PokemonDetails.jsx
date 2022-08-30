import React from 'react'
import { useParams } from 'react-router-dom'

const PokemonDetails = () => {
const {name} = useParams ()


  return (
    <h1>You Pokemon Select is: {name}</h1>
  )
}

export default PokemonDetails