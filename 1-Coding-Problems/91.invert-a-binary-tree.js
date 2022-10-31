// Easy - https://bigfrontend.dev/problem/invert-a-binary-tree
// This is the type for the node
// type Node = null | {
//   value: number
//   left: Node
//   right: Node
// }

/**
 * @param {Node} node
 * @returns {Node}
 */
function invert(node) {
  if (!node) return null;
  // Can swap like this: [node.left, node.right] = [invert(node.right), invert(node.left)];
  const tempLeft = node.left;
  node.left = invert(node.right);
  node.right = invert(tempLeft);
  //
  return node;
}
