import { Provider } from 'react-redux';

import { store } from './redux';
import { GlobalStyle } from './style';
import { MainPage } from './page';


export const App = () => (
  <Provider store={ store }>
    <GlobalStyle />
    <MainPage />
  </Provider>
);
