import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ResultProvider } from '../../context/ResultContext';
import Routes from '../../routes';
import AppContainer from './app.style';
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <ResultProvider>
      <BrowserRouter>
        <GlobalStyles />
        <AppContainer>
          <Routes />
        </AppContainer>
      </BrowserRouter>
    </ResultProvider>
  );
}
