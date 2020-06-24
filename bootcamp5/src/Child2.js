import React, { useReducer } from 'react';
import counterReducer from './CounterReducer';

const Child2 = () => {
  
  let[state, dispatch] = useReducer(counterReducer, 0);
  
    return(
    <div>
    <h1>Hello This is Secnd Child using Context Reducer</h1>
      <h3>Value OF Reducer {state}</h3>
       <button onClick={()=>dispatch('INCREMENT')}>Increment REducer</button>
    </div>
)
}
export default Child2