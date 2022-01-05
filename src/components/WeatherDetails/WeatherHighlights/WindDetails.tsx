import * as S from './WeatherHighlightsStyle'
import { FC, useEffect } from 'react'
import { WiWindDeg as WindDirectionIcon } from 'react-icons/wi';
import { UseWindDirection } from '../../../Hooks/UseWindDirection';

interface Props {
    windDegree: number
}
const WindDetails: FC<Props> = ({ windDegree }) => {


    const [cardinalDirection, amountDegreeToRotateWindIndicator] = UseWindDirection(windDegree);
    const transformProperty = `rotate(${amountDegreeToRotateWindIndicator}deg)`

    return (
        <S.WindInformationsContainer transformProperty={transformProperty} >
            <WindDirectionIcon />
            <span>
                {`${cardinalDirection}`}
            </span>
        </S.WindInformationsContainer>
    )
}

export default WindDetails
