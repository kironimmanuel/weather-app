import React from 'react'
import '../../assets/scss/index.scss'

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]
const days = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
]

const now = new Date()
const month = months[now.getMonth()]
const day = days[now.getDay()]
const date = `${now.getDate()} ${day} ${month} ${now.getFullYear()}`
const time = `${now.getHours()}:${now.getMinutes()}`

function Display({ name, main, weather }, loading) {
  const { icon, description } = weather[0]

  return (
    <div className="container">
      <h3 className="brand">current weather</h3>
      <div>
        <h1 className="temp">{Math.floor(main.temp)}°C</h1>
        <div className="city-time">
          <h1 className="name">{name}</h1>
          <small>
            <span className="time"> {time} Uhr</span>
            <span className="date"> {date}</span>
          </small>
        </div>

        <div className="weather">
          <img
            src={`https://openweathermap.org/img/wn/${icon}.png`}
            className="icon"
            alt="icon"
            width="50"
            height="50"
          />
          <span className="condition">{description}</span>
        </div>
      </div>
    </div>
  )
}

export default Display
