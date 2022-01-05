import * as S from './ActualWeatherInfoStyle'
import { FC, useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'
interface TemperatureProps {
    value: number,
    description: string
}
const ActualTemperature: FC<TemperatureProps> = ({ value, description }) => {
    const colorContext = useContext(ColorContext)

    return (
        <S.TemperatureContainer>
            <S.TemperatureValue>{Math.round(value)}</S.TemperatureValue>
            <S.UnitValue colors={colorContext}>{`°C`}</S.UnitValue>
            <S.WeatherDescription colors={colorContext}>{description}</S.WeatherDescription>
        </S.TemperatureContainer>
    )
}

export default ActualTemperature

