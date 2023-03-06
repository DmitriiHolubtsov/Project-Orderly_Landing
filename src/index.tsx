import { CssBaseline, ThemeProvider } from '@mui/material';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import theme from './cdk/theme';
import reportWebVitals from './report-web-vitals';
import 'swiper/swiper-bundle.min.css';

ReactDOM.render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <CssBaseline />
    </ThemeProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
