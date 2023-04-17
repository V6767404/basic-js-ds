const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        node.left = addNode(node.left, data);
      } else {
        node.right = addNode(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return hasNode(this.rootNode, data);

    function hasNode(node, data) {
      if (!node) {
        return false;
      }

      if (node.data === data) {
        return true;
      }

      if (node.data > data) {
        return hasNode(node.left, data);
      }

      return hasNode(node.right, data);
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (node.data === data) {
        return node;
      }

      if (node.data > data) {
        return findNode(node.left, data);
      }
      return findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(i, data) {
    if (i === null) {
      return null;
    }
    if (data === i.data) {
      if (i.left === null && i.right === null) {
        return null;
      }
      if (i.left === null) {
        return i.right;
      }
      if (i.right === null) {
        return i.left;
      }
      const tempNode = this.getMinNode(i.right);
      i.data = tempNode.data;
      i.right = this.removeNode(i.right, tempNode.data);
      return i;
    } else if (data < i.data) {
      i.left = this.removeNode(i.left, data);
      return i;
    } else {
      i.right = this.removeNode(i.right, data);
      return i;
    }
  }

  getMinNode(i) {
    let cN = i;
    while (cN && cN.left !== null) {
      cN = cN.left;
    }
    return cN;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    return minNode(this.rootNode);

    function minNode(node) {
      if (node.left) {
        return minNode(node.left);
      }

      return node.data;
    }
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    return maxNode(this.rootNode);

    function maxNode(node) {
      if (node.right) {
        return maxNode(node.right);
      }

      return node.data;
    }
  }
}

// const tree = new BinarySearchTree();
// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// console.log(tree.find(7))

const tree = new BinarySearchTree();
tree.add(1);
tree.add(2);
tree.add(3);
tree.add(4);
tree.add(5);
console.log(tree.root().data);
// console.log(tree);
console.log(tree.has(5)); // => true
console.log(tree.min()); //=> 1
console.log(tree.max()); //=> 5
tree.remove(5);
tree.has(5) // => false
tree.max() //=> 4

module.exports = {
  BinarySearchTree,
};
