import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@mui/material/styles';
import { store } from '@app/store';
import { HomePage } from '@component/pages';
import { theme } from '@commons/theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <HomePage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
