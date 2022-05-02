const { NotImplementedError } = require("../extensions/index.js");

const { ListNode } = require("../extensions/list-node.js");

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

//  class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

class Queue {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.top;
  }

  enqueue(value) {
    if (this.length) {
      let current = this.top;
      while (current.next) {
        current = current.next;
      }
      current.next = new ListNode(value);
    } else {
      this.top = new ListNode(value);
    }
    this.length++;
  }

  dequeue() {
    const topValue = this.top.value;
    this.top = this.top.next;
    this.length--;

    return topValue;
  }
}

const queue = new Queue();
queue.enqueue(1); // adds the element to the queue
queue.enqueue(3); // adds the element to the queue
queue.enqueue(5);
// queue.enqueue(5);
// queue.dequeue(); // returns the top element from queue and deletes it, returns 1
// queue.getUnderlyingList(); // returns { value: 3, next: null }
console.log(queue);
console.log(queue.getUnderlyingList());

module.exports = {
  Queue,
};
