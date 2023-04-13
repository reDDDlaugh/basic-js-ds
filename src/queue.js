const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  getUnderlyingList() {
    return this.front;
  }

  enqueue(value) {
    let newNode = new QueueNode(value);

    if (this.back === null) {
      this.front = newNode;
      this.back = newNode;
      return;
    }

    this.back.next = newNode;
    this.back = newNode;
  }

  dequeue() {
    if (this.front == null) {
      return;
    }

    let top = this.front.value;
    this.front = this.front.next;

    if (this.front === null) {
      this.back = null;
    }

    return top;
  }
}

class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

module.exports = {
  Queue
};
