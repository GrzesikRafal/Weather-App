import styled from "styled-components";
import { ColorsProps } from "../../context/ColorContext";

export const RelativeForWrongMessage = styled.div`
position:relative;
`

export const SearchCityForm = styled.form`
display:flex;
justify-content:space-evenly;
gap:1rem;
padding:2rem;
`
export const SearchCityInput = styled.input<ColorsProps>`
text-transform:capitalize;
font-size:1rem;
text-indent: 20px;
font-family: FontAwesome;
border: 1px solid ${props => props.colors.lightFont};
background:${props => props.colors.lightBackground};
color:${props => props.colors.lightFont};
::placeholder{
    text-transform:initial;
    color:${props => props.colors.darkFont};
};
:focus{
  outline: 1px solid ${props => props.colors.searchButton};
}
:focus::placeholder{
  color:${props => props.colors.lightFont};
}
`
export const SubmitSearchButton = styled.button<ColorsProps>`
font-weight:600;
padding:1rem;
border:none;
color:${props => props.colors.lightFont};
background:${props => props.colors.searchButton};
cursor:pointer;
outline:1px solid ${props => props.colors.searchButton};
transition:outline .5s,transform .5s;
:hover,:focus{
   outline: 1px solid ${props => props.colors.lightFont};
   transform:scale(1.1);
}
`