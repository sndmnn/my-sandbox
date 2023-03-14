import React from 'react';
import { getWord } from '../helpers/wordHelpers';

export default function useWord() {
  const [word, setWord] = React.useState(getWord());

  const resetWord = () => {
    const newWord = getWord();
    setWord(newWord);
  };

  const checkGuess = (guess) => {
    const treatedGuess = guess.toUpperCase().trim();
    const lettersStatuses = [];

    for (let i = 0; i < treatedGuess.length; ++i) {
      if (treatedGuess[i] === word[i]) {
        lettersStatuses.push(['correct', treatedGuess[i]]);
        continue;
      }

      if (word.includes(treatedGuess[i])) {
        lettersStatuses.push(['misplaced', treatedGuess[i]]);
      } else {
        lettersStatuses.push(['incorrect', treatedGuess[i]]);
      }
    }

    return lettersStatuses;
  };

  return { word, resetWord, checkGuess };
}
