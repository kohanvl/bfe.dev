// Medium - https://bigfrontend.dev/react-quiz/React-re-render-1
// This is a React Quiz from BFE.dev

import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function A() {
  console.log('A');
  return <B />;
}

function B() {
  console.log('B');
  return <C />;
}

function C() {
  console.log('C');
  return null;
}

function D() {
  console.log('D');
  return null;
}

function App() {
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  console.log('App');
  return (
    <div>
      <A state={state} />
      <D />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

/* Answer is:
'App'
'A'
'B'
'C'
'D'
'App'
'A'
'B'
'C'
'D'
*/
