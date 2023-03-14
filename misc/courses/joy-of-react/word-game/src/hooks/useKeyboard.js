import React from 'react';

const kbMap = {
  Q: '',
  W: '',
  E: '',
  R: '',
  T: '',
  Y: '',
  U: '',
  I: '',
  O: '',
  P: '',
  A: '',
  S: '',
  D: '',
  F: '',
  G: '',
  H: '',
  J: '',
  K: '',
  L: '',
  Z: '',
  X: '',
  C: '',
  V: '',
  B: '',
  N: '',
  M: '',
};

export default function useKeyboard({ checkGuess }) {
  const [keyboard, setKeyboard] = React.useState(kbMap);

  const highlightGuess = (guess) => {
    const checkedGuess = checkGuess(guess);

    const keys = {};

    for (let [status, letter] of checkedGuess) {
      keys[letter] = status;
    }

    setKeyboard({
      ...keyboard,
      ...keys,
    });
  };

  const resetKeyboard = () => {
    setKeyboard(kbMap);
  };

  return {
    keyboardAsArray: Object.entries(keyboard),
    highlightGuess,
    resetKeyboard,
  };
}
