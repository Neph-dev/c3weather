import { useState, useEffect } from 'react'
import axios from 'axios'

import '../App.css'
import { BsFillCloudLightningRainFill } from 'react-icons/bs'


const Weather = () => {

    const baseURL = "https://api.openweathermap.org/data/2.5/weather"
    const APIKey = "bc9ace9cbb93f58311fd175226590e36"

    const [weatherData, setWeatherData] = useState({})

    const getWeatherData = async () => {
        await axios.get(`${baseURL}?appid=${APIKey}&units=metric&q=Pretoria`)
            .then((response) => setWeatherData(response?.data))
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getWeatherData()
    }, [])

    return (
        <div className='weather-container'>
            <div className='weather-glass-card'>
                <div className='weather-glass-header'>
                    <div className='weather-glass-title'>
                        {weatherData.name} | {weatherData.sys?.country}
                    </div>
                </div>
                <div className='weather-glass-body'>
                    <div>
                        <div className='weather-glass-body-title'>
                            {Math.round(weatherData.main?.temp)}°
                        </div>
                        <div className='weather-glass-body-content-description'>
                            {weatherData.weather && weatherData.weather[0]?.description}
                        </div>
                        <div className='weather-glass-body-content-description'>
                            Feels like: {Math.round(weatherData.main?.feels_like)}°
                        </div>
                        <div className='weather-glass-body-content-description'>
                            Humidity: {weatherData.main?.humidity}%
                        </div>
                    </div>
                    <div>
                        <BsFillCloudLightningRainFill size={168} color="#ccc" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Weather
