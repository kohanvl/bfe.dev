import {useEffect, useRef} from 'react';

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  }, [value]); // change if value was changed
  return ref.current;
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
