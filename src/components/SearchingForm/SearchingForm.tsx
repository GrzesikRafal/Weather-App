import * as S from './SearchingFormStyle'
import { FC, FormEvent, FormEventHandler, useContext, useState, useRef, useEffect, ChangeEventHandler, ChangeEvent } from 'react'
import { ColorContext } from '../../context/ColorContext'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'
import WrongCityMessage from '../WrongCityMessage/WrongCityMessage'
interface Props {
    getWeatherInfo: (city: string) => void
    showWrongCityNameMessage: 'false' | 'true';
    handleWrongCityMessage: React.Dispatch<React.SetStateAction<'false' | 'true'>>
}
const SearchingForm: FC<Props> = ({ getWeatherInfo, showWrongCityNameMessage, handleWrongCityMessage }) => {

    const [cityName, setCityName] = useState('')
    const colorContext = useContext(ColorContext)
    const formInput = useRef<HTMLInputElement>(null)

    const submitHandler: FormEventHandler = (e: FormEvent) => {
        e.preventDefault()
        if (formInput.current) {
            if (formInput.current.value.length === 0) {
                setCityName('')
                handleWrongCityMessage('true')
            } else {
                getWeatherInfo(cityName)
            }
            formInput.current.value = ''
        }
    }

    const setCityNameAndHideWrongCityMessage: ChangeEventHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setCityName(e.target.value)
        handleWrongCityMessage('false')
    }
    useEffect(() => {
        formInput.current?.focus()
    }, [])

    return (
        <S.RelativeForWrongMessage>
            <S.SearchCityForm onSubmit={submitHandler}>
                <S.SearchCityInput
                    maxLength={25}
                    ref={formInput}
                    onChange={setCityNameAndHideWrongCityMessage}
                    placeholder="&#xf002; search location"
                    colors={colorContext} />
                <S.SubmitSearchButton colors={colorContext}>Search</S.SubmitSearchButton>
            </S.SearchCityForm>
            <WrongCityMessage showMessage={showWrongCityNameMessage} cityName={cityName} />
        </S.RelativeForWrongMessage>
    )
}
export default SearchingForm