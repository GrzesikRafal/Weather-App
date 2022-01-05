import * as S from './ActualWeatherStyle'
import { FC, useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'
import SearchingForm from '../SearchingForm/SearchingForm'
import ActualWeatherInfo from '../ActualWeatherInfo/ActualWeatherInfo'
import DateAndPlaceInfo from '../ActualWeatherInfo/DateAndPlaceInfo'
import { WeatherInfoInterface } from '../../App'

interface Props {
    getWeatherInfo: (city: string) => void;
    weatherInfo: WeatherInfoInterface;
    showWrongCityNameMessage: 'false' | 'true';
    handleWrongCityMessage: React.Dispatch<React.SetStateAction<'false' | 'true'>>
}

const ActualWeather: FC<Props> = ({ getWeatherInfo, weatherInfo, showWrongCityNameMessage, handleWrongCityMessage }) => {
    const colorContext = useContext(ColorContext)

    return (
        <S.ActualWeatherContainer colors={colorContext}>
            <SearchingForm
                getWeatherInfo={getWeatherInfo}
                showWrongCityNameMessage={showWrongCityNameMessage}
                handleWrongCityMessage={handleWrongCityMessage} />
            <ActualWeatherInfo
                temp={weatherInfo.temp}
                iconId={weatherInfo.weatherIconId}
                description={weatherInfo.weatherDescription} />
            <DateAndPlaceInfo city={weatherInfo.cityName} countryCode={weatherInfo.countryCode} />

        </S.ActualWeatherContainer>
    )
}

export default ActualWeather
