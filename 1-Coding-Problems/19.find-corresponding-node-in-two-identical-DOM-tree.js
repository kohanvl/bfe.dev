/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
const findCorrespondingNode = (rootA, rootB, target) => {
  if (rootA === target) return rootB;
  // using recursion
  for (let i = 0; i < rootA.children.length; i++) {
    const res = findCorrespondingNode(
      rootA.children[i],
      rootB.children[i],
      target,
    );
    if (res) return res;
  }
};
