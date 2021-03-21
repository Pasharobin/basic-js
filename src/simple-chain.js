const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  
  getLength() {
    return this.arr.length;
    
  },
  addLink(value) {
    this.arr.push("( " + value + " )");
    return chainMaker;
  },
  removeLink(position) {
    if (position < 1 || position > this.arr.length) {
      this.arr = [];
      throw new Error("Error");
    }
    this.arr.splice(position - 1, 1);
    return chainMaker;
  },
  reverseChain() {
    this.arr.reverse();
    return chainMaker;
  },
  finishChain() {
    let result = this.arr.join("~~");

    this.arr = [];
    return result;
  }
};

module.exports = chainMaker;
