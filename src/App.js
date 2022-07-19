import React, { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import { nanoid } from 'nanoid'
import loader from './assets/loader.gif'
import Display from './components/ui/Display'
import Cities from './components/ui/Cities'
import InfoCard from './components/ui/InfoCard'
import Search from './components/form/Search'

const key = process.env.REACT_APP_ACCESS_KEY

function App() {
  const [loading, setLoading] = useState(true)
  const [weather, setWeather] = useState([])
  const [city, setCity] = useState('frankfurt')
  const [backgroundImage, setBackgroundImage] = useState('')

  const inputRef = useRef(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)

      await Promise.allSettled([
        axios(
          // `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}`
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=9ef8c7e013a6afbcaa89cbd55e5dc26e`
        ),
        fetch(`https://source.unsplash.com/1600x900/?${city}`),
      ])
        .then(results => {
          const [weather, backgroundImage] = results
          const status = 'fulfilled'
          if (weather.status === status) {
            setWeather(Array.of(weather.value.data))
          }
          if (backgroundImage.status === status) {
            setBackgroundImage(backgroundImage.value.url)
          }
          setLoading(false)
        })
        .catch(error => console.log(error))
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
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('${backgroundImage}')`,
      }}>
      {weather.map(item => {
        return (
          <>
            {loading ? (
              <img src={loader} className="loading" />
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
