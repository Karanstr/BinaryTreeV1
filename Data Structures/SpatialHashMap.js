"use strict";
//Intended as a replacement for my quadtree structure (not yet imported)
//So I can continue developing the game without all the added complexity quadtrees create

//Todo:
//Fix all the terrible names with ones which actually mean things
//Import a vector class at some point
class SpatialHashTable {
  constructor(rows, columns) {
    this.size = [rows, columns];
    //Technically we only care about rows.toString(2).length
    //See comments under this.hashCoordinates() for more
    this.bits = [rows.toString(2).length, columns.toString(2).length];
    //this.size = [4, 17] meaning this.bits = [3, 5]
    // bc this.size[x] =  4 which needs 3 bits (this.bits[x])
    // bc this.size[y] = 17 which needs 5 bits (this.bits[y])
    this.data = []; //Filled with the block values at index[modified z-OrderCurve key] 
  }

  hashCoordinates(x, y) {
    //convertCoordinateToIndex(2, 9)
    //x = 0b10
    //y = 1001
    //extendedX =   '010'; 
    //extendedY = '01001'; 
    //key = 0b extendedY extendedX
    //key = 0b 01001 010
    //This means I don't have to touch y bc its leading 0s are irrelevnt

  }

  dehashKey(key) {
    //x = key % 2 ** this.bits[x]
    //y = key >> 2 ** this.bits[x]
    //Yeah that's it..
  }

  modify(x, y, value) {
    this.data(this.hashCoordinates(x, y)) = value;
  }

  resizeTable(rows, columns) {
    //Idek, this is another night's job
  }




  save() { }
  load() { }
}