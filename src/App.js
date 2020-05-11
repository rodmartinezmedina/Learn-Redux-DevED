import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions/actionsIndex'


function App() {
  const counter = useSelector(state => state.counterReducer); 
  const isLogged = useSelector(state => state.loggedReducer)
  const dispatch = useDispatch();

  return (
    <div className="App">     
    <h1>Hello from the app component</h1> 
    <h2>Counter from redux state is .....{counter}</h2>
    <button onClick={() => dispatch(increment(10)) }>+</button>
    <button onClick={() => dispatch(decrement(5)) }>-</button>

    {isLogged ?
      <>
      <h3> Valuable information for logged in people</h3>
      <button>Logout</button>
      </> : 
      <>
      <h3> You are not logged in. You can't see info</h3>
      <button>Login</button>
      </>
      }
    
    </div>
  );
}

export default App;
