class Werewolf {
    constructor (name, form) {
      if (form === undefined)
        this.form = 'human';
      else {
        this.form = form;
        }
      this.name = name;
      this.hungry = false;
    }
    completeTransformation() {
      if (this.form === 'human') {
        this.form = 'wolf';
        this.hungry = true;
        return 'Aaa-Woooo!'
      }
      else {
        this.form = 'human'
        this.hungry = false;
        return 'Where are I?'
      }
    }
    eatVictim(vicName) {
        if (this.form === 'human') {
            return `No way am I eating ${vicName.name}, I'd like a burger!`
        }
        else {
            vicName.alive = false;
            this.completeTransformation();
            return `Yum, Hannah was delicious.`
        }
    }
}

module.exports = Werewolf;