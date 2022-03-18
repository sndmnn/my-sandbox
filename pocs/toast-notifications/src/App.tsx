import React from 'react';
import AppProvider from './contexts';
import ToastPage from './pages/ToastPage';
import GlobalStyles from './styles/GlobalStyles';

const App: React.FC = () => (
  <AppProvider>
    <ToastPage />
    <GlobalStyles />
  </AppProvider>
);

export default App;
