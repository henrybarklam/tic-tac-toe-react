// React provides a special function called useState that you can call from  your component
// to let it remember things
import { useState } from 'react';



// This code creates a component. Must start with a capital letter 
function Square(){
  //value stores the value and setValue is a function that can be used to change the value
  // null is the initial state variable
  const [value, setValue] = useState(null);
  
  function handleClick(){
    console.log('clicked!');
  }

  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}


//We need to pass the value prop from Board to Square so they each have different numbers
export default function Board() {
  return (

    // Can only return a single element so need to wrap
  <>
  <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>

    <div className="board-row">
      <Square />
      <Square />
      <Square />
    </div>
  </>
  );
}
