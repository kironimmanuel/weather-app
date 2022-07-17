import React from 'react'

function InfoCard({ clouds, main, wind }) {
  return (
    <ul className="details">
      <h4>Weather details</h4>
      <li>
        <span>cloudy</span>
        <span className="cloud">{clouds.all}</span>
      </li>

      <li>
        <span>humidity</span>
        <span className="humidity">{main.humidity} %</span>
      </li>

      <li>
        <span>wind</span>
        <span className="wind">{wind.speed}km/h</span>
      </li>
    </ul>
  )
}

export default InfoCard
