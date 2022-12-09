var Person = require('./person');
var Statue = require('./statue');
class Medusa {
    constructor(name) {
      this.name = name;
      this.statues = [];
    }
    gazeAtVictim(vicName) {
        var freshStone = new Statue(vicName.name)
        if (this.statues.length === 3) {
            var luckyOne = this.statues.shift()
            this.statues.push(freshStone)
            return new Person(luckyOne.name, 'relieved')
        }
        else{
        this.statues.push(freshStone)
        }
      }
    }
module.exports = Medusa;