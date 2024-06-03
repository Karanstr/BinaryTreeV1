"use strict";

class Node {
  constructor(data) {
    this.data = data;
    this.nextNode = undefined;
  }
}

class LinkedList {
  constructor() {
    this.initialNode = new Node(undefined);
    this.length = 0;
  }

  //Returns first index matching data
  findData(data) {
    let node = this.initialNode.nextNode;
    for (let i = 0; i < this.length; i++) {
      if (node.data == data) { return i }
      node = node.nextNode;
    }
  }

  //Returns node at index, 0 based indexing with initialNode at index -1
  getNode(index) {
    if (index > this.length) {
      console.log('Index is beyond reach'); return false
    }
    let node = this.initialNode;
    for (let i = -1; i < index; i++) { node = node.nextNode }
    return node
  }

  //Inserts new node at index, pushing current node forward
  insertAtIndex(index, data) {
    if (index < 0) { console.log('Cannot modfiy root'); return false }
    let parentNode = this.getNode(index - 1);
    if (parentNode == false) { return false }
    let node = new Node(data);
    node.nextNode = parentNode.nextNode
    parentNode.nextNode = node;
    this.length += 1;
    return true
  }

  //Inserts new node after the current trailing node
  insertAtEnd(data) {
    this.insertAtIndex(this.length, data);
    return true
  }

  //Loops through an array, inserting each non-null value at the end
  insertNonSparseArray(array) {
    array.forEach((data) => {
      if (data != undefined) { this.insertAtEnd(data) }
    })
    return true
  }

  //Deletes the node at index, returning that node's value
  deleteIndex(index) {
    if (index < 0) { console.log('Cannot modfiy root'); return false }
    let parentNode = this.getNode(index - 1);
    if (parentNode == false) { return false }
    let deletedNode = parentNode.nextNode;
    parentNode.nextNode = deletedNode.nextNode;
    this.length -= 1
    return deletedNode.data
  }

  //Deletes the trailing node
  deleteLastNode() {
    return this.deleteIndex(this.length - 1)
  }

}

export default LinkedList
