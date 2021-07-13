/**
 * cancel all timer from window.setTimeout
 */
const firstTimerId = setTimeout(() => {}, 0);

function clearAllTimeout() {
  const lastTimerId = setTimeout(() => {}, 0);
  for (i = firstTimerId; i <= lastTimerId; i++) {
    clearTimeout(i);
  }
}
