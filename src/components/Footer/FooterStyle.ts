import styled from "styled-components";
import { colors } from "../../context/ColorContext";

export const FooterContainer = styled.footer`
margin:1rem 0;
color:${colors.darkFont};
@media (min-width: 768px){
    grid-column:1/3;
}
`