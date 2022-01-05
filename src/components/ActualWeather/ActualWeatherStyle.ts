import styled from "styled-components";
import { ColorsProps } from "../../context/ColorContext";

export const ActualWeatherContainer = styled.div<ColorsProps>`
  padding-bottom: 4rem;
  background: ${props => props.colors.lightBackground};

`;
