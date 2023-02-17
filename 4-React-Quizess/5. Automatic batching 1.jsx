// Easy - https://bigfrontend.dev/react-quiz/Automatic-batching
// This is a React Quiz from BFE.dev

import {screen} from '@testing-library/dom';
import userEvent from '@testing-library/user-event';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';

function App() {
  const [state, setState] = useState(0);
  console.log('App ' + state);
  return (
    <div>
      <button
        onClick={() => {
          setState((count) => count + 1);
          setState((count) => count * 2);
        }}
      >
        click me
      </button>
    </div>
  );
}

(async () => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<App />);

  userEvent.click(await screen.findByText('click me'));
})();

/* Answer is:
'App 0' // first render
'App 2' // second render after click
*/
