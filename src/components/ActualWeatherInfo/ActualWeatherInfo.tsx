import * as S from './ActualWeatherInfoStyle'
import { FC } from 'react'
import ActualWeatherIcon from './ActualWeatherIcon'
import ActualTemperature from './ActualTemperature'

interface Props {
    temp: number;
    description: string
    iconId: string;
}

const ActualWeatherInfo: FC<Props> = ({ temp, description, iconId }) => {
    return (
        <S.ActualWeatherInfoContainer>
            <ActualWeatherIcon iconId={iconId} />
            <ActualTemperature value={temp}  description={description} />
        </S.ActualWeatherInfoContainer>

    )
}

export default ActualWeatherInfo
