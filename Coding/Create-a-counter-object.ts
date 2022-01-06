// Easy - https://bigfrontend.dev/problem/create-a-counter-object
function createCounter(): {count: number} {
  let i = 0;
  return {
    get count() {
      return i++;
    },
  };
}
