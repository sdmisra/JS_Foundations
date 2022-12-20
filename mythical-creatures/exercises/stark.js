const Direwolf = require('../exercises/direwolf');
class Stark {
    constructor(thisStark) {
        this.name = thisStark.name;
        if (thisStark.area) {
            this.location = thisStark.area;
        }
        else {
            this.location = 'Winterfell'
        }
        this.safe = false;
    }
    sayHouseWords() {
    if (this.safe === false)
        return `Winter is Coming`
    else 
        return 'The North Remembers'
    }
    callDirewolf(name, callHome) {
        var suddenWolf = new Direwolf(name, callHome)
        suddenWolf.home = this.location;
        suddenWolf.protect(this)
        return suddenWolf;
    }
}

module.exports = Stark;