class Centaur {
    constructor(pony) {
      if (pony.name === undefined) {
          this.name = 'Percy'
        }
      else {
          this.name = pony.name
        }
      if (pony.type === undefined) {
          this.breed = 'Palomino';
        }
      else {
          this.breed = pony.type
        }
      this.cranky = false;
      this.standing = true;
      this.mood = 0;
      this.layingDown = false; 
    }
    shootBow() {
        if (this.mood >= 3) {
          // console.log('line 22')
          this.cranky = true;
          return 'NO!'
        }
        else if (this.mood < 3 && this.standing) {
          this.mood += 1
          if (this.mood >= 3) {this.cranky = true}
          // console.log('line 29', 'cranky?:', this.cranky)
          return 'Twang!!!'
        }
        else {
          return 'NO!'
        }
    }
    run() {
        if (this.mood >= 3) {
          // console.log('line 38')
          this.cranky = true;
          return 'NO!'
        }
        else if (this.mood < 3 && this.standing) {
          this.mood += 1
          if (this.mood >= 3) {this.cranky = true}
          // console.log('line 41', 'cranky?:', this.cranky)
          return 'Clop clop clop clop!!!'
        }
        else {
          return 'NO!'
        }
    }
    sleep() {
        if (this.standing === true) {
          return 'NO!'
        }
        else {
          this.cranky = false;
          this.mood = 0;
          return 'ZZZZ'
        }
    }
    layDown() {
        this.standing = false;
        this.layingDown = true;
    }
    standUp() {
        this.standing = true;
        this.layingDown = false;
    }
    drinkPotion() {
        if (this.standing) {
            this.cranky = false;
        }
        else return 'Not while I\'m laying down!'
    }

}








module.exports = Centaur;