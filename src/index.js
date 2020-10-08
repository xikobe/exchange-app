import React from 'react';
import { theme, ThemeProvider, CSSReset } from '@chakra-ui/core';
import ReactDOM from 'react-dom';
import App from './components/app';
import PocketContext from './contexts/pockets';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <PocketContext>
        <App />
      </PocketContext>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
