class Magician {
    constructor (mage) {
        this.name = `The Great ${mage.name}`;
        this.assistant = mage.assistant;
        if (mage.clothing === undefined) {
          this.favoriteAccessory = 'top hat';
        }
        else {
          this.favoriteAccessory = mage.clothing;
        }
        this.confidencePercentage = 10;
    }
    performIncantation(sentence) {
        return sentence.toUpperCase() +'!'
    }
    performTrick() {
      this.confidencePercentage += 10;
      if (this.favoriteAccessory === 'top hat') {
        return `PULL RABBIT FROM TOP HAT`;
      }
      else {
        return `PULL DOVE FROM SLEEVE`;
      }
    }
    performShowStopper() {
      if (this.confidencePercentage >= 100 && this.assistant === true) {
        return `WOW! The magician totally just sawed that person in half!`
      }
      else {
        return `Oh no, this trick is not ready!`
      }
    }



}

module.exports = Magician;


//Note from lesson today, Tues, Dec 6th: Useful syntax for splicing without a for loop.
//this.contents.splice(this.contents.indexOf(thing), 1)