// This code creates a component. Must start with a capital letter 

function Square({ value }){
  //You can add functions within functions
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
    <Square value="1" />
    <Square value="2"/>
    <Square value="3"/>
  </div>
  
  <div className="board-row">
    <Square value="4"/>
    <Square value="5"/>
    <Square value="6"/>
  </div>

  <div className="board-row">
    <Square value="7"/>
    <Square value="8"/>
    <Square value="9"/>
  </div>
  </>
  );
}
