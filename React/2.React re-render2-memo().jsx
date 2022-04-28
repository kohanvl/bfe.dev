import React, {memo, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function A() {
  console.log('A');
  return <B />;
}

const B = memo(() => {
  console.log('B');
  return <C />;
});

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

/*
Will log:
"App" - first render before useEffect() worked
"A" - first render
"B" - first render
"C" - first render
"D" - first render
"App" - second render after useEffect() worked
"A" - second render -> no B because of memo() -> no C because no B
"D" - second render
 */
