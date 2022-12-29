class SkatePark {
    constructor(parkStats) {
        this.name = parkStats.name;
        this.yearFounded = parkStats.year;
        this.style = parkStats.type;
        this.features = parkStats.features;
        this.isPrivate = parkStats.isPrivate || false;
        this.cost = parkStats.price || 0;
        this.occupants = [];
    }
    admit(whichSkater) {
      if (this.occupants.length >= 3) {
        return `Sorry, we are at max capacity. Thank you for understanding.`
        }
        if (this.isPrivate === true) {
          if (whichSkater.money >= this.cost) {
            whichSkater.money -= this.cost;
            this.occupants.push(whichSkater);
            return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`
            }
          else {
            return `Sorry, you don't have enough money.`
            }
        }
        else {
          this.occupants.push(whichSkater);
          return `Welcome to the free ${this.name} Skatepark!`
        }

    }

}




module.exports = SkatePark;