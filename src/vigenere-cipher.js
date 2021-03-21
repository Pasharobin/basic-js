const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor (toggle) {
    this.toggle = toggle;
    this.obj1 =  {"A": 0, "B": 1,"C": 2,"D": 3,"E": 4,"F": 5,"G": 6,"H": 7,"I": 8,"J": 9,"K": 10,"L": 11,"M": 12,"N": 13,"O": 14,"P": 15,"Q": 16,"R": 17,"S": 18,"T": 19,"U": 20,"V": 21,"W": 22,"X": 23,"Y": 24,"Z": 25};
    this.obj2 =  {0: "A", 1: "B", 2: "C", 3: "D", 4: "E", 5: "F", 6: "G", 7: "H", 8: "I", 9: "J", 10: "K", 11: "L", 12: "M", 13: "N", 14: "O", 15: "P", 16: "Q", 17: "R", 18: "S", 19: "T", 20: "U", 21: "V", 22: "W", 23: "X", 24: "Y", 25: "Z"};
    this.n = 0;
  }

  encrypt(string, key) {
    if (!string || !key) {
      throw new Error("Error");
    }
    let str = string.split("");
    if (this.toggle === false) {
      str = str.reverse();
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() in this.obj1) {
        if (this.n >= key.length) {
          this.n = this.n - key.length;
        }
        str[i] = this.obj2[(this.obj1[str[i].toUpperCase()] + this.obj1[key[this.n].toUpperCase()]) % 26];
        this.n++;
      }
    }
    this.n = 0;

    return str.join("");
  } 
  decrypt(string, key) {
    if (!string || !key) {
      throw new Error("Error");
    }
    let str = string.split("");
    if (this.toggle === false) {
      str = str.reverse();
    }
    for (let i = 0; i < str.length; i++) {
      if (str[i].toUpperCase() in this.obj1) {
        if (this.n >= key.length) {
          this.n = this.n - key.length;
        }
        let res = this.obj1[str[i].toUpperCase()] - this.obj1[key[this.n].toUpperCase()];
        if (res < 0) {
          res +=26;
        }
        str[i] = this.obj2[res];
        this.n++;
      }
    }
    this.n = 0;

    return str.join("");
  }
}

module.exports = VigenereCipheringMachine;



