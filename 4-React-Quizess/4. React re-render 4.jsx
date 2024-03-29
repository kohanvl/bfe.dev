// Medium - https://bigfrontend.dev/react-quiz/React-re-render-4
// This is a React Quiz from BFE.dev

import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function A({children}) {
  console.log('A');
  const [state, setState] = useState(0);
  useEffect(() => {
    setState((state) => state + 1);
  }, []);
  return children;
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
  console.log('App');
  return (
    <div>
      <A>
        <B />
      </A>
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
'A' - rerender only parent
*/
