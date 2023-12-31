// React provides a special function called useState that you can call from  your component
// to let it remember things
import { useState } from 'react';

//? To collect data from multiple children, or to have two child components communicate with each other
//? declare the shared state in their parent component instead. The parent component can pass
//? that state back down to the children via props. This is how you keep child components
//? in sync with each other and with their parent


// This code creates a component. Must start with a capital letter 
function Square( {value, onSquareClick} ){
  return (
    //The DOM <button> element's onClick attribute has a special meaning to React because it is a built-in component
    <button className="square" onClick={onSquareClick}>{value}</button>);
}


//We need to pass the value prop from Board to Square so they each have different numbers
export default function Board() {

  //The set function lets React know that the component has changed
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true)

  // JS supports closures which means that the inner function (handleClick) has access to variables and functions
  // defined in an outer function

  // This creates a copy of the squares array and then sets that array as the main array

  function handleClick(i){

    // You want to return early if the square is already occupied
    if (squares[i]){
      return
    }

  // Crucial for maintaining immutability - avoiding direct data mutation lets you keep previous versions of the data intact
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X"
    }
    else{
      nextSquares[i] = "O"
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  return (

    // Can only return a single element so need to wrap
  <>
    <div className="board-row">
      <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
      <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
      <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
    </div>

    <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
      <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
      <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
    </div>

    <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
      <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
      <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
    </div>
  </>
    );
}
