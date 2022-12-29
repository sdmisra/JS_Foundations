class Skater {
    constructor(skaterStats) {
        this.name = skaterStats.name;
        this.skill = skaterStats.skill;
        this.tricks = skaterStats.tricks;
        this.money = skaterStats.cash || 20;
        this.frustration = 0;
    }
    practice(whichTrick) {
        if (this.tricks[whichTrick] === true) {
          console.log(`'${this.name} does a ${whichTrick}!'`)
          return `${this.name} does a ${whichTrick}!`
        }
        else {
          this.frustration += 1;
          if (this.frustration === 3) {
            this.tricks[whichTrick] = true;
            this.frustration = 0;
            return `I just learned to ${whichTrick}!!!`
          }
        }
    }
}




module.exports = Skater;