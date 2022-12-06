class Hobbit {
    constructor (whichHob) {
        this.name = whichHob.name
        this.age = 0;
        this.adult = false;
        this.old = false;
    }
    celebrateBirthday() {
        this.age += 1;
        if (this.age >= 33) {
          this.adult = true
        }
        if (this.age > 100) {
          this.old = true
        }
    }
    getRing() {
        if (this.name === 'Frodo') {
            this.hasRing = true;
            return 'Here is the ring!'
        }
        else {
            this.hasRing = false;
            return 'You can\'t have it!'
        }

    }


}
module.exports = Hobbit;