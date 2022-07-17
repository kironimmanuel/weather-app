import React from 'react'
import cities from '../../data/data.js'

function Cities(props) {
  return (
    <ul className="cities">
      {cities.map(city => {
        return (
          <li className="city" onClick={() => props.handleClick(city.name)}>
            {city.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Cities
