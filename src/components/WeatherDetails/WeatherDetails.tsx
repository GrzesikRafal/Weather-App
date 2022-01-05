import * as S from './WeatherDetailsStyle'
import { FC, useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'
import SunsetSunriseInfo from './SunsetSunrise/SunsetSunriseInfo'
import { WeatherInfoInterface } from '../../App'
import WeatherHighlights from './WeatherHighlights/WeatherHighlights'

interface Props {
    weatherInfo: WeatherInfoInterface
}
const WeatherDetails: FC<Props> = ({ weatherInfo }) => {
    const colorContext = useContext(ColorContext)
    const { sunrise, sunset } = weatherInfo
    
    return (
        <S.WeatherDetailsContainer colors={colorContext}>
            <SunsetSunriseInfo sunrise={sunrise} sunset={sunset} />
            <WeatherHighlights weatherInfo={weatherInfo} />
        </S.WeatherDetailsContainer>
    )
}

export default WeatherDetails
