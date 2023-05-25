import React from 'react';
import MovieProvider from './store/MovieProvider';
import MainPage from './components/Pages/MainPage';
import { StylesProvider } from "@material-ui/styles";


const App = () => {

  return (
    <StylesProvider injectFirst>
      <MovieProvider>
        <MainPage />
      </MovieProvider>
    </StylesProvider>
  );
}

export default App;
