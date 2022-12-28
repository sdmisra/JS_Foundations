var Skier = require('./Skier');

class Lift {
    constructor(liftMaxSeats) {
        this.inService = true;
        this.limit = liftMaxSeats || 3;
        this.skiers = [];
        this.safetyBar = 'up';
    }
    admitSkier(name, hasTicket) {
        var possibleRider = new Skier(name, hasTicket);
        if (this.limit === this.skiers.length) {
            this.safetyBar = 'down';
            return `Sorry, ${possibleRider.name}. Please wait for the next lift!`
        }
        if (possibleRider.hasLiftTicket === true) {
            this.skiers.push(possibleRider);
        }
        else {
            return `Sorry, ${possibleRider.name}. You need a lift ticket!`
        }
    }
    startLift() {
        if (this.limit === this.skiers.length) {
            this.safetyBar = 'down';
        }
        else {
            this.safetyBar = 'up';
        }
        if (this.limit - this.skiers.length === 1) {
            return `We still need 1 more skier!`
        }
        else {
            return `We still need ${this.limit - this.skiers.length} more skiers!`
        }
    }
  
}

module.exports = Lift;