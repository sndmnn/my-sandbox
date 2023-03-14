import React from 'react';
import { range } from '../../utils';

export default function Guess({ guess }) {
  return (
    <>
      {guess ? (
        <p className="guess">
          {guess.map(([status, letter], index) => (
            <span key={index} className={`cell ${status}`}>
              {letter}
            </span>
          ))}
        </p>
      ) : (
        <p className="guess">
          {range(5).map((_, index) => (
            <span key={index} className="cell" />
          ))}
        </p>
      )}
    </>
  );
}
