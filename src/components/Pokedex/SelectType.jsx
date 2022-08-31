import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SelectType = ({setOptionType, optionType, setPokeSearch}) => {
    const [listTypes, setListTypes] = useState()

    useEffect(() => {
        URL = 'https://pokeapi.co/api/v2/type'
        axios.get(URL)
        .then(res => setListTypes(res.data.results))
        .catch(err => console.log(err))
    }, [])
    
const handleChange = e => {
    setOptionType(e.target.value)
    setPokeSearch('')

}

  return (
    <select className='select__Type' value={optionType} onChange={handleChange}>
        <option value = "All">All pokemons</option>
        {
            listTypes?.map (type => (
                <option value={type.name}>{type.name}</option>
            ))
        }
    </select>
  )
}

export default SelectType