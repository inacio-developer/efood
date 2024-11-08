import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { GlobalStyle } from './styles/GlobalStyle';
import { BrowserRouter } from 'react-router-dom';
import { RootRoutes as Router } from './routes';
import { Provider } from 'react-redux';
import store from './store/store';
const App: React.FC = (): JSX.Element => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </Provider>
  );
};
export default App;
