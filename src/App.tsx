import React, { useEffect, useState } from 'react';

// Components
import { BoardComponent } from './components/BoardComponent';
import { LostFigures } from './components/LostFigures';
import { Timer } from './components/Timer';
// Models
import { Board } from './models/Board';
import { Player } from './models/Player';
import { Colors } from './models/Colors';
// Assets
import './App.css';

export const App = () => {
  const [board, setBoard] = useState(new Board());
  const [whitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

  useEffect(() => {
    restart();
    setCurrentPlayer(whitePlayer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  function swapPlayer() {
    setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
  }

  return (
    <div className="app">
      <div className="custom-row">
        <BoardComponent board={board} setBoard={setBoard} currentPlayer={currentPlayer} swapPlayer={swapPlayer} />
        <div className="statistics">
          <LostFigures title="Black" figures={board.lostBlackFigures} />
          <LostFigures title="White" figures={board.lostWhiteFigures} />
        </div>
      </div>
      <div className="timer">
        <Timer restart={restart} currentPlayer={currentPlayer} />
      </div>
    </div>
  );
};
