/**
 * Easy - https://bigfrontend.dev/problem/create-a-counter-object
 * @returns { {count: number}}
 */
function createCounter() {
  let i = 0;
  return {
    get count() {
      return i++;
    },
  };
}
