'use strict';

function removeElement(array, value) {
  return array.filter(indexVal => indexVal != value)
}

//Numbers only
class Node {
  constructor(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }

  insert(value) {
    if (value < this.value) {
      if (this.left == undefined) { this.left = new Node(value) }
      else { this.left.insert(value) }
    }
    if (this.value < value) {
      if (this.right == undefined) { this.right = new Node(value) }
      else { this.right.insert(value) }
    }

  }


}

class BTree {
  constructor() {
    this.initialNode = new Node()
  }

  insert(value) {

  }
}