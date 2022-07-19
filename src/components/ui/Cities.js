import React from 'react'
import cities from '../../data/data.js'
import { nanoid } from 'nanoid'

function Cities(props) {
  return (
    <ul className="cities">
      {cities.map(city => {
        return (
          <li
            key={nanoid()}
            className="city"
            onClick={() => props.handleClick(city.name)}>
            {city.name}
          </li>
        )
      })}
    </ul>
  )
}

export default Cities
