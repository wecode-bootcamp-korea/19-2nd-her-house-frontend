import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import Theme from './styles/theme';
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>,
  document.getElementById('root')
);
