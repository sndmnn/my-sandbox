import React from 'react';
import useWord from './useWord';
import useKeyboard from './useKeyboard';

export default function useGame() {
  const { word, resetWord, checkGuess } = useWord();
  const { keyboardAsArray, highlightGuess, resetKeyboard } = useKeyboard({
    checkGuess,
  });

  const [gameEnded, setGameEnded] = React.useState(false);
  const [userWon, setUserWon] = React.useState(false);

  const [checkedGuesses, setCheckedGuesses] = React.useState([]);

  const endGame = (won) => {
    setGameEnded(true);
    setUserWon(!!won);
  };

  const resetGame = () => {
    resetWord();
    resetKeyboard();
    setGameEnded(false);
    setUserWon(false);
    setCheckedGuesses([]);
  };

  const addGuess = (guess) => {
    const checkedGuess = checkGuess(guess);
    setCheckedGuesses((prev) => [...prev, checkedGuess]);
  };

  return {
    word,
    checkedGuesses,
    checkGuess,
    addGuess,
    endGame,
    gameEnded,
    userWon,
    resetGame,
    keyboardAsArray,
    highlightGuess,
  };
}
