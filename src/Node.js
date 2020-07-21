/**
 * Represents a node.
 */
class Node {
    /**
     * Create a node.
     * @param {Number} value - The value gained from using the node.
     * @param {Number} cost - The resource cost of using the node. 
     */
    constructor(value, cost) {
      this.value = value;
      this.cost = cost;
      this.ratio = value/cost;
      this.childNodes = [];
    }
  }

  module.exports = Node;