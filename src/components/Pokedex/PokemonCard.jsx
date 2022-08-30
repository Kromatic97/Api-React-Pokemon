import React, { useEffect, useState } from 'react'
import axios from 'axios'
import StatPoke from './StatPoke'
import { useNavigate } from 'react-router-dom'

const PokemonCard = ({url}) => {
    const [pokemon, setPokemon] = useState()

    const navigate = useNavigate()

    useEffect(() => {
    
     axios.get(url)
     .then(res => setPokemon(res.data))
     .catch(err => console.log(err))
    }, [])
    console.log(pokemon);

const handleClick = () => navigate(`/pokedex/${pokemon.name}`)

  return (

    <article onClick={handleClick} className='card'>
        <header>
            <img src={pokemon?.sprites.other["official-artwork"]["front_default"]} alt="" />
        </header>

        <section className='body'>
            <h3>{pokemon?.name}</h3>
            <ul>
                {
                    pokemon?.types.map(slot => (
                        <li key={slot.type.url}>{slot.type.name}</li>

                    ))
                }  
            </ul>
        </section>
                
                    <footer className='footer__stat_poke'>
                        
                            {
                                pokemon?.stats.map(stat => (
                                    <StatPoke 
                                    key={stat.stat.url}
                                    infoStat={stat}/>
                                ))
                            }
                            
                        
                    </footer>
               


    </article>




  )
}

export default PokemonCard