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
<<<<<<< HEAD
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
=======
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  </>,

>>>>>>> 91bf951... Add:Nav바 리뷰반영 최종거의 직전
  document.getElementById('root')
);
