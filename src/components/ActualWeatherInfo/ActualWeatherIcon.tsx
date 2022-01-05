import * as S from './ActualWeatherInfoStyle'
import { FC } from 'react'

interface Props {
    iconId: string
}

const ActualWeatherIcon: FC<Props> = ({ iconId }) => {

    return (
        <S.ActualWeatherIconContainer >
            <img
                src={`https://openweathermap.org/img/wn/${iconId}@2x.png`}
                alt="actual weather icon"
            />
        </S.ActualWeatherIconContainer>
    )
}

export default ActualWeatherIcon
