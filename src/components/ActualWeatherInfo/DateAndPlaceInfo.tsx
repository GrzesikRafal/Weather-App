import * as S from './ActualWeatherInfoStyle'
import { FC, useContext } from 'react'
import { ColorContext } from '../../context/ColorContext'
import { UseActualDate } from '../../Hooks/UseActualDate'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

interface Props {
    city: string
    countryCode: string
}

const DateAndPlaceInfo: FC<Props> = ({ city, countryCode }) => {
    const colorsContext = useContext(ColorContext)
    const [dayName, dayNumber, month] = UseActualDate()

    return (
        <>
            <S.DateInfo colors={colorsContext}>
                <p>Today</p>
                <S.DateDivider>&#xf192;</S.DateDivider>
                <p>{` ${dayName}, ${dayNumber} ${month}`}</p>
            </S.DateInfo>
            <S.PlaceInfo colors={colorsContext}>
                &#xf041;
                <span>{`${city} , ${countryCode}`}</span>
            </S.PlaceInfo>
        </>
    )
}

export default DateAndPlaceInfo
