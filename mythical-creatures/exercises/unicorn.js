class Unicorn {
  constructor(name, color) {
    console.log(color)
    if (color === undefined) {
      this.color = 'white';
    }
    else {
      this.color = color;
    }
    this.name = name;
  }
  isWhite() {
    return false
  }
  says(phrase) {
    return `**;* ${phrase} *;**`
  }
}
module.exports = Unicorn;


// 1. Read the test
// 2. ask yourself if it's going to fail, and why
// 3. run the rest
// 4. make it pass
// 
// 
//
//
//
//
//
//
// class, using a constructor:
// class Dog {
//   constructor(name) {
//       // any traits or properties
//       this.name = name;
//   }

    // behavior
//   bark() {
//     console.log('woof');
//   }
// }