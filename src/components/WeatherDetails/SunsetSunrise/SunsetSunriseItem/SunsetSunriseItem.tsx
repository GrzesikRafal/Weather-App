import * as S from '../../WeatherDetailsStyle'
import { FC, useContext } from 'react'
import { UseUnixTimeToHumanFormat } from '../../../../Hooks/UseUnixTimeToHumanFormat'
import { ColorContext } from '../../../../context/ColorContext'
interface Props {
    event: 'sunrise' | 'sunset'
    timeUNIX: number;
}
const SunsetSunriseItem: FC<Props> = ({ event, timeUNIX }) => {
    const colors = useContext(ColorContext)
    const eventTime = UseUnixTimeToHumanFormat(timeUNIX)

    return (
        <S.SunsetSunriseItemContainer colors={colors} >
            <img src={require(`../../../../images/${event}.png`)} alt={`${event} icon`} />
            <p>{event}</p>
            <p>{eventTime}<span>(GMT+1)</span></p>
        </S.SunsetSunriseItemContainer>
    )
}

export default SunsetSunriseItem
