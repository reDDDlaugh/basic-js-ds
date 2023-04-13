const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {

  constructor() {
    this.head = null;
  }

  root() {
    return this.head;
  }

  add(data) {
    let newNode = new Node(data);

    if(this.head === null) {
      this.head = newNode;
    } else {
      this.addNode(this.head, newNode);
    }
  }

  has(data, node = this.head) {
    if (node.data == data) {
      return true;
    } else {
      if(data < node.data) {
        if(node.left === null) {
          return false;
        } else {
          return this.has(data, node.left);
        }
      } else {
        if(node.right === null) {
          return false;
        } else {
          return this.has(data, node.right);
        }
      }
    }
  }

  find(data, node = this.head) {
    if (node.data == data) {
      return node;
    } else {
      if(data < node.data) {
        if(node.left === null) {
          return null;
        } else {
          return this.find(data, node.left);
        }
      } else {
        if(node.right === null) {
          return null;
        } else {
          return this.find(data, node.right);
        }
      }
    }
  }

  remove(data, node = this.head) {
    if(node === null) {
      return null;
    } else if(data < node.data) {
        node.left = this.remove(data, node.left);
        return node;
      } else if(data > node.data) {
          node.right = this.remove(data, node.right);
          return node;
        } else {
          if(node.left === null && node.right === null) {
            node = null;
            return node;
          }
          if(node.left === null) {
            node = node.right;
            return node;
          } else if(node.right === null) {
              node = node.left;
              return node;
            }

          const MIN = this.min(node.right);

          node.data = MIN;
          node.right = this.remove(MIN, node.right);
          return node;
        }
  }

  min(node = this.head) {
    if(node.left === null) {
      return node.data;
    } else {
      return this.min(node.left);
    }
  }

  max(node = this.head) {
    if(node.right === null) {
      return node.data;
    } else {
      return this.max(node.right);
    }
  }

  addNode(node, newNode) {
    if(newNode.data < node.data) {
      if(node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if(node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

module.exports = {
  BinarySearchTree
};