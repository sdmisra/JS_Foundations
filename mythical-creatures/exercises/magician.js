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
    }
    performIncantation(sentence) {
        return sentence.toUpperCase() +'!'
    }



}

module.exports = Magician;