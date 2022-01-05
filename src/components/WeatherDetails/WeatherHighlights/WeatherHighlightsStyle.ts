import styled from 'styled-components'
import { ColorsProps } from '../../../context/ColorContext'
import { HumidityBarInterface } from './HumidityBar'
export const WeatherHighlightsContainer = styled.div`
h2{ 
    margin:4rem 0;
    text-align:left;
}
`

export const HighlightsItemsContainer = styled.div`
display:grid;
gap:3rem;
grid-template-columns:1fr;
@media (min-width: 768px){
  grid-template-columns:1fr 1fr ;
}
`

//WeatherHighlightsItem component//
export const WeatherHighlightsItemContainer = styled.div<ColorsProps>`
 background:${props => props.colors.lightBackground};
 padding:2rem 1rem;

 p{ 
    padding:1rem 0;
    font-weight:500;
    font-size:4rem;
    span{
        font-size:2.5rem;
    }
    
 }
`
interface windInfo {
    transformProperty: string
}
export const WindInformationsContainer = styled.div<windInfo>`
display:flex;
align-items:center;
justify-content:center;
gap:.5rem;
svg{
    font-size:2.5rem;
    transform:${props => props.transformProperty}
  
}
`
//Humidity Bar component//

export const HumidityBarDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 70%;
  margin: 0 auto;
  p {
    font-size: 0.8rem;
    padding:5px;
  }
`;
export const HumidityBar = styled.div<HumidityBarInterface>`
  position: relative;
  height: 0.5rem;
  border-radius: 15px;
  margin: 0 auto;
  width: 70%;
  background: ${(props) => props.colors.lightFont};
  ::before{
    position: absolute;
    content: "";
    left: 0;
    width: ${(props) => props.humidityValue && props.humidityValue + "%"};
    border-radius: 15px;
    height: 100%;
    background: ${(props) => props.colors.humidityBar};
  }
  ::after {
    position: absolute;
    content: "%";
    right:0;
    bottom:-20px;
}
`;