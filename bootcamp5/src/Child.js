import React, { useContext } from 'react';
import CounterContext from './CounterContext';
const Child = (props) => {

    let counterValue = useContext(CounterContext)
    console.log(counterValue)
return(
    <div>
      <h1>Hello This is FIrst Child Counter Context</h1>
       <h3>Hello {counterValue[0]}</h3>

       <button onClick ={() => {counterValue[1](++counterValue[0])}}>Increament context</button>
    </div>
);
}
export default Child;
