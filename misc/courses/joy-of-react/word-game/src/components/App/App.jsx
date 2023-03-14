import React from 'react';
import Game from '../Game';
import Header from '../Header';

export default function App() {
  return (
    <>
      <Header />
      <section className="content-wrapper">
        <Game />
      </section>
    </>
  );
}
