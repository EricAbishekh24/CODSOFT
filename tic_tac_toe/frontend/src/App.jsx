import { useState, useEffect } from 'react';

const winCombos = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

function App() {
  const [board, setBoard] = useState(Array(9).fill(' '));
  const [gameActive, setGameActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState('Select Game Mode');
  const [statusColor, setStatusColor] = useState('var(--text-color)');
  const [winningCells, setWinningCells] = useState([]);
  
  const [gameMode, setGameMode] = useState(null); // 'pve' | 'pvp' | 'select-pve' | 'select-pvp' | null
  const [humanPlayer, setHumanPlayer] = useState(null);
  const [aiPlayer, setAiPlayer] = useState(null);
  const [currentPlayer, setCurrentPlayer] = useState('X');

  useEffect(() => {
    if (!gameMode || gameMode.startsWith('select')) return;
    
    const winDataX = checkWin(board, 'X');
    const winDataO = checkWin(board, 'O');
    
    if (winDataX) {
      gameOver('X', winDataX.combo);
    } else if (winDataO) {
      gameOver('O', winDataO.combo);
    } else if (checkTie(board)) {
      gameOver('Tie', []);
    }
  }, [board, gameMode]);

  const checkWin = (boardState, player) => {
    for (let i = 0; i < winCombos.length; i++) {
      const [a, b, c] = winCombos[i];
      if (boardState[a] === player && boardState[b] === player && boardState[c] === player) {
        return { combo: [a, b, c] };
      }
    }
    return null;
  };

  const checkTie = (boardState) => {
    return boardState.every(cell => cell !== ' ');
  };

  const gameOver = (result, combo) => {
    setGameActive(false);
    setWinningCells(combo);
    
    if (result === 'Tie') {
      setStatusMessage("It's a Tie!");
      setStatusColor('#94a3b8');
    } else if (gameMode === 'pvp') {
      setStatusMessage(`Player ${result} Wins! 🎉`);
      setStatusColor(`var(--${result.toLowerCase()}-color)`);
    } else {
      if (result === humanPlayer) {
        setStatusMessage('You Win! 🎉');
        setStatusColor('var(--x-color)');
      } else {
        setStatusMessage('AI Wins! 🤖');
        setStatusColor('var(--o-color)');
      }
    }
  };

  const fetchAiMove = async (currentBoard, aiSym, humanSym) => {
    try {
      const response = await fetch('http://localhost:5000/api/move', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          board: currentBoard,
          humanPlayer: humanSym,
          aiPlayer: aiSym
        })
      });
      
      const data = await response.json();
      
      if (data.position !== null && data.position !== undefined) {
        const aiBoard = [...currentBoard];
        aiBoard[data.position] = aiSym;
        setBoard(aiBoard);
        setCurrentPlayer(humanSym);
        setGameActive(true);
        setStatusMessage(`Your Turn! (${humanSym})`);
      }
    } catch (err) {
      console.error(err);
      setStatusMessage('Error connecting to AI backend');
    }
  };

  const handleCellClick = async (index) => {
    if (!gameActive || board[index] !== ' ') return;

    if (gameMode === 'pvp') {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      
      if (!checkWin(newBoard, currentPlayer) && !checkTie(newBoard)) {
        const nextPlayer = currentPlayer === 'X' ? 'O' : 'X';
        setCurrentPlayer(nextPlayer);
        setStatusMessage(`Player ${nextPlayer}'s Turn`);
        setStatusColor('var(--text-color)');
      }
    } else {
      if (currentPlayer !== humanPlayer) return;

      const newBoard = [...board];
      newBoard[index] = humanPlayer;
      setBoard(newBoard);

      if (!checkWin(newBoard, humanPlayer) && !checkTie(newBoard)) {
        setGameActive(false);
        setCurrentPlayer(aiPlayer);
        setStatusMessage('AI is thinking...');
        setStatusColor('var(--text-color)');
        
        await fetchAiMove(newBoard, aiPlayer, humanPlayer);
      }
    }
  };

  const startPvE = (symbol) => {
    const aiSym = symbol === 'X' ? 'O' : 'X';
    setHumanPlayer(symbol);
    setAiPlayer(aiSym);
    setGameMode('pve');
    setBoard(Array(9).fill(' '));
    setWinningCells([]);
    
    setCurrentPlayer('X');

    if (symbol === 'O') {
      setGameActive(false);
      setStatusMessage('AI is thinking...');
      fetchAiMove(Array(9).fill(' '), aiSym, symbol);
    } else {
      setGameActive(true);
      setStatusMessage(`Your Turn! (${symbol})`);
      setStatusColor('var(--text-color)');
    }
  };

  const startPvP = (symbol) => {
    setGameMode('pvp');
    setBoard(Array(9).fill(' '));
    setGameActive(true);
    setHumanPlayer(symbol); 
    setCurrentPlayer(symbol);
    setStatusMessage(`Player ${symbol}'s Turn`);
    setStatusColor('var(--text-color)');
    setWinningCells([]);
  };

  const restartCurrentGame = () => {
    setBoard(Array(9).fill(' '));
    setWinningCells([]);
    
    if (gameMode === 'pve') {
      setCurrentPlayer('X');
      if (humanPlayer === 'O') {
        setGameActive(false);
        setStatusMessage('AI is thinking...');
        fetchAiMove(Array(9).fill(' '), 'X', 'O');
      } else {
        setGameActive(true);
        setStatusMessage(`Your Turn! (${humanPlayer})`);
        setStatusColor('var(--text-color)');
      }
    } else if (gameMode === 'pvp') {
      setGameActive(true);
      setCurrentPlayer(humanPlayer);
      setStatusMessage(`Player ${humanPlayer}'s Turn`);
      setStatusColor('var(--text-color)');
    }
  };

  const restartGame = () => {
    setGameMode(null);
    setHumanPlayer(null);
    setAiPlayer(null);
    setBoard(Array(9).fill(' '));
    setGameActive(false);
    setStatusMessage('Select Game Mode');
    setStatusColor('var(--text-color)');
    setWinningCells([]);
  };

  return (
    <div className="container">
      <header>
        <h1>Tic-Tac-Toe</h1>
        <p>Play against a friend or the AI!</p>
      </header>

      <main>
        {!gameMode ? (
          <div className="selection-screen">
            <h2>Select Game Mode</h2>
            <div className="selection-buttons">
              <button onClick={() => setGameMode('select-pve')} className="btn select-btn x-btn">Player vs AI</button>
              <button onClick={() => setGameMode('select-pvp')} className="btn select-btn o-btn">Player vs Player</button>
            </div>
          </div>
        ) : gameMode.startsWith('select') ? (
          <div className="selection-screen">
            <h2>Who Goes First?</h2>
            <div className="selection-buttons">
              <button onClick={() => gameMode === 'select-pve' ? startPvE('X') : startPvP('X')} className="btn select-btn x-btn">Play as X</button>
              <button onClick={() => gameMode === 'select-pve' ? startPvE('O') : startPvP('O')} className="btn select-btn o-btn">Play as O</button>
            </div>
            <p className="hint">The selected symbol will go first.</p>
            <button onClick={restartGame} className="btn" style={{marginTop: '1.5rem', padding: '0.8rem 2rem', fontSize: '1rem'}}>Back</button>
          </div>
        ) : (
          <>
            <div className="status-panel">
              <h2 className="statusMessage" style={{ color: statusColor }}>
                {statusMessage}
              </h2>
            </div>

            <div className="board">
              {board.map((cell, index) => {
                let className = 'cell';
                if (cell === 'X') className += ' x';
                if (cell === 'O') className += ' o';
                if (winningCells.includes(index)) className += ' win';

                return (
                  <div 
                    key={index} 
                    className={className} 
                    onClick={() => handleCellClick(index)}
                  >
                    {cell !== ' ' ? cell : ''}
                  </div>
                );
              })}
            </div>

            <div className="game-controls">
              <button onClick={restartCurrentGame} className="btn" style={{marginRight: '10px'}}>Restart</button>
              <button onClick={restartGame} className="btn">Main Menu</button>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
