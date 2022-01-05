import styled from "styled-components";
import { ColorsProps } from "../../context/ColorContext";


//ActualWeatherInfo Component//
export const ActualWeatherInfoContainer = styled.div`
margin-top:4rem;
`

//ActualWeatherIcon Component//
export const ActualWeatherIconContainer = styled.div`
img{
    width:200px;
    height:200px;
}
`

//ActualTemperature Component//
export const TemperatureContainer = styled.div`
margin-top:-2rem; 
`
export const TemperatureValue = styled.span`
font-size:9rem;
`
export const UnitValue = styled.span<ColorsProps>`
font-size:3rem;
color:${props => props.colors.darkFont};
`
export const WeatherDescription = styled.p<ColorsProps>`
margin-bottom:1.5rem;
font-size:2.5rem;
text-transform:capitalize;
color:${props => props.colors.darkFont};
`

//DateAndPlaceInfo Component//
export const DateInfo = styled.div<ColorsProps>`
display:flex;
justify-content:center;
margin-top:5rem;
*{
     color:${props => props.colors.darkFont};
 }
`
export const DateDivider = styled.span`
padding:0 1rem;
font-family:FontAwesome;
`
export const PlaceInfo = styled.p<ColorsProps>`
margin-top:2rem;
font-family:FontAwesome;
color:${props => props.colors.darkFont};
span{
    padding:0 .6rem;
    color:inherit;
    font-family:FontAwesome;
}
`

