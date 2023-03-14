import React from 'react';
import { GUESS_LIMIT } from '../../constants';

const USER_WON = true;
const USER_LOST = false;

export default function Controls({
  word,
  checkedGuesses,
  addGuess,
  gameEnded,
  endGame,
  currentGuess,
  setCurrentGuess,
  keyboardAsArray,
  highlightGuess,
}) {
  const handleSubmitGuess = (e) => {
    e.preventDefault();

    if (checkedGuesses.length === GUESS_LIMIT - 1) {
      endGame(USER_LOST);
    }

    if (currentGuess === word) {
      endGame(USER_WON);
    }

    highlightGuess(currentGuess);
    addGuess(currentGuess);
    setCurrentGuess('');
  };

  const appendToGuess = (letter) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + letter);
    }
  };

  const popFromGuess = () => {
    if (currentGuess.length > 0) {
      setCurrentGuess(currentGuess.slice(0, -1));
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmitGuess} className="guess-input-wrapper">
          <label htmlFor="guess-input">Enter Guess:</label>
          <input
            id="guess-input"
            type="text"
            title="Guess must contain only alphabetical characters and be 5 letters long"
            pattern="[a-zA-Z]{5,5}"
            disabled={gameEnded}
            value={currentGuess}
            onChange={(e) => {
              const treatedValue = e.target.value.toUpperCase().trim();

              if (treatedValue.length <= 5) {
                setCurrentGuess(treatedValue);
              }
            }}
          />

          <div className="keyboard">
            <div>
              {keyboardAsArray.slice(0, 10).map(([letter, status]) => {
                return (
                  <button
                    type="button"
                    key={letter}
                    onClick={() => appendToGuess(letter)}
                    className={`key ${status}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
            <div>
              {keyboardAsArray.slice(10, 19).map(([letter, status]) => {
                return (
                  <button
                    type="button"
                    key={letter}
                    onClick={() => appendToGuess(letter)}
                    className={`key ${status}`}
                  >
                    {letter}
                  </button>
                );
              })}
            </div>
            <div>
              <button type="button" className="key" onClick={popFromGuess}>
                Erase
              </button>
              {keyboardAsArray.slice(19, 26).map(([letter, status]) => {
                return (
                  <button
                    type="button"
                    key={letter}
                    onClick={() => appendToGuess(letter)}
                    className={`key ${status}`}
                  >
                    {letter}
                  </button>
                );
              })}
              <button type="submit" className="key">
                Enter
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
