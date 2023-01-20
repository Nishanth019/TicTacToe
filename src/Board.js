import React, { useEffect, useState } from 'react'
import Square from './Square.js'
import bg from './bg.jpg'
import tic from './tic.jpg';
import './Board.css'
const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [turn, setTurn] = useState(true);
  console.log("state", state);
  const handleClick = (i) => {
    if(!isWinner && !draw){
    const copystate = [...state];
    if (state[i] === null) {
      copystate[i] = turn ? "X" : "O";
      setState(copystate);
      turn ? setTurn(false) : setTurn(true);
    }
  }
  }
  const [draw, setDraw] = useState(false)
  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        document.getElementsByClassName('square')[a].style.color = "rgb(255, 47, 47)";
        document.getElementsByClassName('square')[b].style.color = "rgb(255, 47, 47)";
        document.getElementsByClassName('square')[c].style.color = "rgb(255, 47, 47)";
        return state[a] ;
      }
    }
    return false;
  }
  const full = () => {
    for (let i = 0; i < state.length; i++) {
      if (state[i] === null) {
        return false;
      }
    }
    return true;
  }
  useEffect(() => {
    if (full()) {
      setDraw(true);
    }
  }, [state]);

  const isWinner = checkWinner();
  const handleCheck = ()=>{
    
    setState(Array(9).fill(null));
    setTurn(true);
    setDraw(false)
    for(let i =0;i<9;i++){
      document.getElementsByClassName('square')[i].style.color = "black";
    }
  }
  return (
    <>
    <img src={tic} alt='tic' className='tic' />
      <img src={bg} alt='bg' className='bg' />
      <div className="container">
      {

        isWinner||draw ? <>{!isWinner && draw ? <> <div className="winner"><h2>It's Draw😛!!</h2></div></> : <> <div className="winner"><h2> {isWinner} won the game👑!!</h2 >  </div>
        </>} </> :
          <>
            
            {isWinner ? "" : <center><h2 className='name'>Player {turn ? "X" : "O"}  please move</h2> </center>}
            </> }
            <div className="board-container">

              <div className="board-row">
                <Square className="square-r-b"   onClick={() => handleClick(0)} value={state[0]} />
                <Square className="square-b 1" onClick={() => handleClick(1)} value={state[1]} />
                <Square className="square-l-b 2" onClick={() => handleClick(2)} value={state[2]} />
              </div>
              <div className="board-row">
                <Square className="square-r 3" onClick={() => handleClick(3)} value={state[3]} />
                <Square className="4" onClick={() => handleClick(4)} value={state[4]} />
                <Square className="square-l 5" onClick={() => handleClick(5)} value={state[5]} />
              </div>
              <div className="board-row">
                <Square className="square-r-t 6" onClick={() => handleClick(6)} value={state[6]} />
                <Square className="square-t 7" onClick={() => handleClick(7)} value={state[7]} />
                <Square className="square-l-t 8" onClick={() => handleClick(8)} value={state[8]} />
              </div>
              < button  onClick={handleCheck} className='btn btn-primary button' >Start new game</button>
            </div>
            </div>
    </>
  )
}
export default Board;