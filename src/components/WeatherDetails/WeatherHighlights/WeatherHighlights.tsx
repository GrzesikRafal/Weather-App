import * as S from './WeatherHighlightsStyle'
import { FC } from 'react'
import WeatherHighlightsItem from './WeatherHighlightsItem'
import { WeatherInfoInterface } from '../../../App'
interface Props {
    weatherInfo: WeatherInfoInterface

}
const WeatherHighlights: FC<Props> = ({ weatherInfo }) => {
    const { windSpeed, humidity, visibility, pressure, windDegree } = weatherInfo
    const visibilityKilometers = visibility / 1000
    
    return (
        <S.WeatherHighlightsContainer>
            <h2>Today's Hightlights </h2>
            <S.HighlightsItemsContainer>
                <WeatherHighlightsItem description='Wind status' value={windSpeed} unit='m/s' windDegree={windDegree} />
                <WeatherHighlightsItem description='Humidity' value={humidity} unit='%' />
                <WeatherHighlightsItem description='Visibility' value={visibilityKilometers} unit='km' />
                <WeatherHighlightsItem description='Air Pressure' value={pressure} unit='hPa' />
            </S.HighlightsItemsContainer>
        </S.WeatherHighlightsContainer>
    )
}

export default WeatherHighlights
