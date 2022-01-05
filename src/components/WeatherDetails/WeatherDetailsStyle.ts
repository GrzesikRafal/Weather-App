import styled from "styled-components";
import { ColorsProps } from "../../context/ColorContext";

export const WeatherDetailsContainer = styled.div<ColorsProps>`
  padding: 2rem 5rem;
  background: ${props => props.colors.darkBackground};
`;

//SunsetSunriseInfo component//
export const SunsetSunriseContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  margin: 2rem 0;
  
  @media (min-width: 768px) {
    flex-direction: row;
    gap: 8rem;
    
  }
`;
//SunsetSunriseItem component//
export const SunsetSunriseItemContainer = styled.div<ColorsProps>`
  img {
    width: 150px;
    height: 150px;
  }
  p {
    font-size: 2rem;
    font-family: "Cairo", sans-serif;
  }
  p:first-of-type {
    font-size: 1rem;
  }
  span{
    color:${props=>props.colors.darkFont};
    margin-left:.5rem;
    font-size:1rem;
  }
`;
