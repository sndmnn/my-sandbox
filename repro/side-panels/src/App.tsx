import React from 'react';
import GlobalStyles from './styles/GlobalStyles';
import ToDos from './components/ToDos/ToDos';

export default function App() {
  return (
    <>
      <GlobalStyles />
      <ToDos />
    </>
  );
}
