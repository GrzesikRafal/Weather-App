import { FC, useState, useEffect } from 'react';
import styled from 'styled-components'
import ActualWeather from './components/ActualWeather/ActualWeather';
import WeatherDetails from './components/WeatherDetails/WeatherDetails';
import { useLocalStorage } from './Hooks/UseLocalStorage';
import axios from 'axios';
import Footer from './components/Footer/Footer';

export interface WeatherInfoInterface {
  cityName: string;
  temp: number;
  humidity: number;
  pressure: number;
  visibility: number;
  windSpeed: number;
  weatherDescription: string;
  weatherIconId: string;
  countryCode: string;
  sunrise: number;
  sunset: number;
  windDegree: number;
}

const App: FC = () => {
  const [weatherInfo, setWeatherInfo] = useState<WeatherInfoInterface | null>(null)
  const [lastSearchedCity, SetLastSearchedCity] = useLocalStorage<string>('lastSearchedCity', 'Rzeszow');
  const [showWrongCityNameMessage, setShowWrongCityMessage] = useState<'false' | 'true'>('false')

  async function getWeatherInfo(city: string): Promise<void> {
    const apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b401517ac54e2090a03537b89f18c92d&units=metric`
    try {
      const response = await axios.get(apiLink);
      if (response.status === 200) {

        SetLastSearchedCity(city)
        showWrongCityNameMessage === 'true' && setShowWrongCityMessage('false')

        const { temp, humidity, pressure } = response.data.main
        const { name: cityName, visibility } = response.data
        const { speed: windSpeed, deg: windDegree } = response.data.wind
        const { description: weatherDescription, icon: weatherIconId } = response.data.weather[0]
        const { country: countryCode, sunrise, sunset } = response.data.sys

        setWeatherInfo({
          cityName,
          temp,
          humidity,
          pressure,
          visibility,
          windSpeed,
          weatherDescription,
          weatherIconId,
          countryCode,
          sunrise,
          sunset,
          windDegree
        })
      }
    } catch (error) {
      setShowWrongCityMessage('true')
    }
  }
  useEffect(() => {
    getWeatherInfo(lastSearchedCity)
  }, [])

  return (
    <AppContainer>
      {weatherInfo &&
        <>
          <ActualWeather
            getWeatherInfo={getWeatherInfo}
            weatherInfo={weatherInfo}
            showWrongCityNameMessage={showWrongCityNameMessage}
            handleWrongCityMessage={setShowWrongCityMessage}
          />
          <WeatherDetails weatherInfo={weatherInfo} />
          <Footer />
        </>}

    </AppContainer>
  )
}

export default App;

const AppContainer = styled.div`
    display:grid;
    grid-template-columns:1fr;
    text-align:center;
    max-width:1300px;
    min-height:100vh;
    @media (min-width: 768px){
      grid-template-columns:1fr 2fr;
 }
    `