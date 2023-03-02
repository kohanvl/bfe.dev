// Easy - https://bigfrontend.dev/react/useIsFirstRender
import {useRef} from 'react';

export function useIsFirstRender(): boolean {
  const isFirstRender = useRef(true);
  if (isFirstRender.current) {
    isFirstRender.current = false;
    return true;
  }
  return false;
}

// if you want to try your code on the right panel
// remember to export App() component like below

// export function App() {
//   return <div>your app</div>
// }
