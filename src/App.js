import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'

import Display from './components/ui/Display'
import Cities from './components/ui/Cities'
import InfoCard from './components/ui/InfoCard'
import Search from './components/form/Search'

const key = process.env.REACT_APP_ACCESS_KEY

function App() {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('frankfurt')

  const inputRef = useRef(null)
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const response = await axios(url)
        setLoading(false)
        setWeather(Array.of(response.data))
      } catch (error) {
        setLoading(false)
        console.log(error)
      }
    }
    getData()
  }, [city])

  const handleSubmit = e => {
    e.preventDefault()
    setCity(inputRef.current.value)
  }

  const handleClick = city => {
    setCity(city)
  }

  return (
    <div
      className="weather-app"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('https://source.unsplash.com/1600x900/?${city}')`,
      }}>
      {weather.map(item => {
        return (
          <>
            {loading ? (
              <h3 className="loading">Loading...</h3>
            ) : (
              <Display key={nanoid()} {...item} />
            )}
            <div key={nanoid()} className="panel">
              <Search
                key={nanoid()}
                handleSubmit={handleSubmit}
                inputRef={inputRef}
              />
              <Cities key={nanoid()} handleClick={handleClick} />
              <InfoCard key={nanoid()} {...item} />
            </div>
          </>
        )
      })}
    </div>
  )
}

export default App
