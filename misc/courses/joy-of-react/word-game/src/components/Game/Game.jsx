import React from 'react';
import useGame from '../../hooks/useGame';
import { range } from '../../utils';
import { GUESS_LIMIT } from '../../constants';
import Guess from './Guess';
import Controls from './Controls';
import { BsArrowCounterclockwise } from 'react-icons/bs';

export default function Game() {
  const {
    word,
    checkedGuesses,
    checkGuess,
    addGuess,
    gameEnded,
    userWon,
    endGame,
    resetGame,
    keyboardAsArray,
    highlightGuess,
  } = useGame();

  const [currentGuess, setCurrentGuess] = React.useState('');

  return (
    <div className="game-content">
      <button className="reset-button" onClick={resetGame}>
        <BsArrowCounterclockwise size={32} />
      </button>
      <div>
        <h3>Your word: {word}</h3>
        <div>
          {checkedGuesses.map((guess, index) => (
            <Guess key={index} guess={guess} />
          ))}
          {range(GUESS_LIMIT - checkedGuesses.length).map((_, index) => (
            <Guess key={index} />
          ))}
        </div>
      </div>

      <Controls
        currentGuess={currentGuess}
        setCurrentGuess={setCurrentGuess}
        word={word}
        checkedGuesses={checkedGuesses}
        checkGuess={checkGuess}
        addGuess={addGuess}
        gameEnded={gameEnded}
        endGame={endGame}
        resetGame={resetGame}
        keyboardAsArray={keyboardAsArray}
        highlightGuess={highlightGuess}
      />

      {gameEnded && (
        <div className={`${userWon ? 'win' : 'lose'} banner`}>
          {userWon ? (
            <p>
              <strong>Congratulations!</strong> Got it in
              <strong>{checkedGuesses.length} guesses</strong>.
            </p>
          ) : (
            <p>
              Sorry, the correct answer is <strong>{word}</strong>.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
