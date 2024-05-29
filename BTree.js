'use strict';

function removeElement(array, value) {
  return array.filter(indexVal => indexVal != value)
}

class Node {
  constructor(value) {
    this.value = value;
    this.right = undefined;
    this.left = undefined;
  }

  getLeft() { return this.left }

  getRight() { return this.right }
}

//Numbers only
class BTree {
  constructor() {
    this.initialNode = new Node();
  }

  //Does not work
  fill(array) {
    array.sort((a, b) => a - b)
    while (array.length != 0) {
      let currentVal = array[Math.floor(array.length / 2)];
      this.insert(currentVal);
      array = removeElement(array, currentVal)
    }
  }

  find(value) {
    let currentNode = this.initialNode;
    let oldNode = currentNode;
    let nextNode;
    while (currentNode.value != value) {
      if (currentNode.value < value) { nextNode = currentNode.getRight() }
      else if (currentNode.value > value) { nextNode = currentNode.getLeft() }

      if (nextNode == undefined) { break }
      else {
        oldNode = currentNode;
        currentNode = nextNode;
      }
    }
    return [oldNode, currentNode]
  }

  insert(value) {
    let node = this.find(value)[1];
    if (node.value == value) {
      console.log('Value already exists within tree');
      return false
    }
    if (node.value == undefined) { node.value = value }
    else if (node.value < value) { node.right = new Node(value) }
    else if (node.value > value) { node.left = new Node(value) }
    return true
  }

  //Does not work
  remove(value) {
    let nodes = this.find(value);
    if (nodes[1].value != value) {
      console.log('Value does not exist within tree');
      return false
    }


  }

}