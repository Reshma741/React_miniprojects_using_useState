
import React,{useState} from 'react';



function CounterApp(){

  const[value,setValue]=useState(0);

  function increment(){
    setValue(value+1);
  }
   function decrement(){
    setValue(value-1);
  }
  return(<>
  <button type='button' onClick={increment}>+</button>
<h1>{value}</h1>
<button type='button' onClick={decrement}>-</button>

  
  </>)
}

export default CounterApp;