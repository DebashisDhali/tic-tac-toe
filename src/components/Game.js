import React, { useState } from 'react';
import Board from './Board';
import '../TicTacToe.css';
import { calculateWinner } from '../utils/utils';

function Game() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = calculateWinner(board);

  const handleSquareClick = (index) => {
    if (winner || board[index]) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div className="game">
      <h1>Tic Tac Toe</h1>
      <Board squares={board} onClick={handleSquareClick} />
      <div className="status">
        {winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}
      </div>
      <button className="restart-button" onClick={restartGame}>Restart Game</button>
    </div>
  );
}

export default Game;
