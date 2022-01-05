import * as S from '../WeatherDetailsStyle'
import { FC } from 'react'
import SunsetSunriseItem from './SunsetSunriseItem/SunsetSunriseItem'

interface Props {
    sunset: number;
    sunrise: number;
}
const SunsetSunriseInfo: FC<Props> = ({ sunrise, sunset }) => {
    return (
        <S.SunsetSunriseContainer>
            <SunsetSunriseItem event='sunrise' timeUNIX={sunrise} />
            <SunsetSunriseItem event='sunset' timeUNIX={sunset} />
        </S.SunsetSunriseContainer>
    )
}

export default SunsetSunriseInfo
