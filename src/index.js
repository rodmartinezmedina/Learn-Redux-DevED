import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';

/* eslint-disable no-underscore-dangle */
const myStore = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */


ReactDOM.render(
  <Provider store={myStore}>
    <App />
  </Provider>
  , document.getElementById('root')

);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





// //STORE => GLOBALIZED STATE


// //ACTION
// const increment = () => {
//   return {
//     type: 'INCREMENT'
//   }
// }
// //type is just the name of the action.

// const decrement = () => {
//   return {
//     type: 'DECREMENT'
//   }
// }


// //REDUCER
// //Reducers checks what to do with the action. We'll create a reducer that takes care of all
// // of the axtions related to our counter
// // 2 VREyeParameters. 1) the state 2) the action. The action can be any just by calling it's name
// const counter = (state = 0, action ) => {
//   switch(action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state -1;
//   }
// };


// let store = createStore(counter);

// //Display it in the console
// store.subscribe( () => console.log(store.getState()));


// //DISPATCH
// //Dispatches action to the reducer
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(increment());
// store.dispatch(decrement());
