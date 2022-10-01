// https://bigfrontend.dev/react/The-React-Counter

import React, {useState} from 'react';

export function App() {
  const [counter, setCounter] = useState(0);
  const decrement = () => setCounter(counter - 1);
  const increment = () => setCounter(counter + 1);
  return (
    <div>
      <button data-testid="decrement-button" onClick={decrement}>
        -
      </button>
      <button data-testid="increment-button" onClick={increment}>
        +
      </button>
      <p>clicked: {counter}</p>
    </div>
  );
}

// run your code by clicking the run button on the right
