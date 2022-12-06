class Vampire {
    constructor(name, pet) {
      this.ouncesDrank = 0;
      this.name = name;
      if (pet === undefined) {
        this.pet = 'bat';
      }
      else {
        this.pet = pet;
      }
      this.thirsty = true;
    }
    drink() {
        if (this.thirsty === true) {
            console.log('Vampire Thirst Quenched!')
            this.thirsty = false;
        }
        if (this.ouncesDrank === 50) {
            return 'I\'m too full to drink anymore!'
        }
        this.ouncesDrank += 10;
        console.log('ounces', this.ouncesDrank);
    }
}

module.exports = Vampire;