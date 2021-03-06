import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import { StoreProvider } from './store';

render(
  <StoreProvider reducer={reducer} initialState={{ count: 0 }}>
    <App />
  </StoreProvider>,
  document.getElementById('root')
);

function reducer(state, action) {
  switch(action.type) {
    case 'increment':
      return { ...state, count: state.count + 1 };
    case 'decrement':
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
}
