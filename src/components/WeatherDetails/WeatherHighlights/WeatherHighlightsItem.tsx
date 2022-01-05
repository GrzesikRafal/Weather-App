import * as S from './WeatherHighlightsStyle'
import { FC, useContext, } from 'react'
import { ColorContext } from '../../../context/ColorContext'
import WindDetails from '../WeatherHighlights/WindDetails'
import HumidityBar from './HumidityBar'

interface Props {
    description: string;
    unit: string;
    value: number;
    windDegree?: number;
}

const WeatherHighlightsItem: FC<Props> = ({ description, unit, value, windDegree }) => {
    const colors = useContext(ColorContext)

    return (
        <S.WeatherHighlightsItemContainer colors={colors}>
            <span>{description}</span>
            <p>{value}<span>{unit}</span></p>
            {windDegree && < WindDetails windDegree={windDegree} />}
            {description === 'Humidity' && <HumidityBar humidityValue={value} />}
        </S.WeatherHighlightsItemContainer>
    )
}

export default WeatherHighlightsItem
