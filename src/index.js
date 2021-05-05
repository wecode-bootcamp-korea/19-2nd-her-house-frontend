import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import { ThemeProvider } from 'styled-components';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
