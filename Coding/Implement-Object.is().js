/**
 * Easy - https://bigfrontend.dev/problem/implement-Object.is
 * @param {any} a
 * @param {any} b
 * @return {boolean}
 */
function is(a, b) {
  if (a === 0 && b === 0) return 1 / a === 1 / b;
  else if (Number.isNaN(a) && Number.isNaN(b)) return true;
  else return a === b;
}
