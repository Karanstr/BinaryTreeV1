"use strict";
import Vector2 from "../Utility/Vector2.js";
//Most space efficient when rows == columns and rows/columns are a power of 2
//Todo:


class Grid {
  constructor(rows, columns, sideLength, defaultValue) {
    this.dimensions = new Vector2(rows, columns);
    this.sideLength = sideLength
    this.keyOffset = (Math.min(rows, columns) - 1).toString(2).length;
    this.maxBits = (Math.max(rows, columns) - 1).toString(2).length
    this.data = []; //Filled with block values at index[this.hash(x, y)]
    for (let x = 0; x < rows; x++) {
      for (let y = 0; y < columns; y++) {
        this.modify(this.hash(x, y), defaultValue); //Fills this.data with default value
      }
    }
  }

  hash(x, y) {
    if (Math.max(x, y) > (2 ** this.maxBits) - 1 || Math.min(x, y) < 0) {
      throw RangeError("Value isn't within table boundary");
    }
    let key;
    if (this.dimensions.x < this.dimensions.y) {

      key = (y << this.keyOffset) + x
    }
    else { key = (x << this.keyOffset) + y }
    return key
  }

  //Shut up, I know hashes are supposed to be one way
  dehash(key) {
    if (key < 0 || key > (2 ** (this.maxBits * 2)) - 1) {
      throw RangeError("Value isn't within table boundary");
    }
    let x, y;
    if (this.dimensions.x < this.dimensions.y) {
      x = key % 2 ** this.keyOffset; y = key >> this.keyOffset;
    }
    else {
      y = key % 2 ** this.keyOffset; x = key >> this.keyOffset;
    }
    return new Vector2(x, y)
  }

  modify(key, value) {
    this.data[key] = value;
  }

  read(key) {
    return this.data[key]
  }

  resizeTable(rows, columns) {
    //Idek, this is another night's job
  }

  save() { }
  load() { }
}

export default Grid
