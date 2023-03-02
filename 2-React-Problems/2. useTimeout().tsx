import {useEffect, useRef} from 'react';

export function useTimeout(callback: () => void, delay: number) {
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const timeout = setTimeout(() => callbackRef.current(), delay);
    return () => clearTimeout(timeout);
  }, [delay]);
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
