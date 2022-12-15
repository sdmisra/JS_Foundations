var Skier = require('./Skier');

class Lift {
    constructor(liftCap) {
        this.inService = true;
        this.limit = liftCap.limit
        this.skiers = [];
        this.safetyBar = 'up';
    }
  
}

module.exports = Lift;