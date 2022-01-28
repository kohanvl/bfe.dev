// Easy - https://bigfrontend.dev/problem/create-a-simple-store-for-DOM-node
class NodeStore {
  constructor() {
    this.state = [];
  }
  /**
   * @param {Node} node
   * @param {any} value
   */
  set(node, value) {
    node.__stateId__ = this.state.length;
    this.state[node.__stateId__] = value;
  }
  /**
   * @param {Node} node
   * @return {any}
   */
  get(node) {
    return this.state[node.__stateId__];
  }

  /**
   * @param {Node} node
   * @return {Boolean}
   */
  has(node) {
    return '__stateId__' in node;
  }
}
