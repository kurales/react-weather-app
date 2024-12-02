import { useState } from 'react'
import './index.css'

const Main = () => {
  const [input, setInput] = useState('')
  const [data, setData] = useState({})

  const API = 'de88292d987b7864b5f666ff726de2c5'
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${API}&units=metric`

  function onSubmitHandler(e) {
    e.preventDefault()
    fetch(URL)
      .then((response) => response.json())
      .then((response) => setData(response))
    setInput('')
  }

  return (
    <div className="w-screen h-screen bg-sky-800 bg-opacity-60  flex flex-col justify-center items-center gap-2 text-white">
      <h1 className="text-3xl font-semibold mb-5 italic  text-shadow-sm">
        {data.name}
      </h1>
      {data?.main && (
        <h2 className="text-2xl italic">Temp: {data.main.temp} °C</h2>
      )}
      {data?.main && (
        <h2 className="text-2xl italic mb-5">Humidity: {data.main.humidity}</h2>
      )}
      <form className="flex shadow-lg" onSubmit={onSubmitHandler}>
        <input
          className="py-2 px-5 outline-none border-2 border-sky-700 text-sky-700 italic"
          type="text"
          placeholder="Enter your city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="italic text-white px-5 py-2 bg-sky-700 border-2 border-sky-700 hover:bg-sky-900 hover:border-sky-900"
          type="submit"
        >
          See the weather
        </button>
      </form>
    </div>
  )
}

export default Main
