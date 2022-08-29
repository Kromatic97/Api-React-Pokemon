import React from 'react'

const StatPoke = ({infoStat}) => {
  return (
    <div className='stat__info'>
        <li className='stat__info-details'>
            <h4>{infoStat.stat.name}</h4>
            <p>{infoStat.base_stat}</p>
        </li>
    </div>
  )
}

export default StatPoke