import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalCss from './GlobalCss';
import { ColorContext, colors } from './context/ColorContext'
import styled from 'styled-components'

const AppWrapper = styled.div`
display:grid;
place-items:center;
background:${colors.darkBackground};
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalCss />
    <ColorContext.Provider value={colors}>
      <AppWrapper>
        <App />
      </AppWrapper>
    </ColorContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
