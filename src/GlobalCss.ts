import { createGlobalStyle } from "styled-components";
import { colors } from "./context/ColorContext";
const GlobalCss = createGlobalStyle`
   *{
       margin: 0;
       padding: 0;
       box-sizing:border-box;
       font-family: 'Raleway', sans-serif;
       color:white;
   }
   
::-webkit-scrollbar {
  width: 10px;
  background:${colors.darkBackground};
}

/* Track */
::-webkit-scrollbar-track {
  border-radius: 10px;
  background: ${colors.lightBackground};
}

/* Handle */
::-webkit-scrollbar-thumb {
  background:${colors.humidityBar};
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
background:${colors.scrollBarHover}
}
`;
export default GlobalCss;
