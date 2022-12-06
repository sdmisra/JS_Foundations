class Dragon {
    constructor(name, rider) {
        this.name = name;
        this.rider = rider;
        this.hungerLevel = 3;
        this.hungry = true;
    }
    greet() {
        return `Hi, ${this.rider}!`
    }
    eat() {
        this.hungerLevel -= 1;
        if (this.hungerLevel > 0 ) {
            this.hungry = true;
        }
        else {
            this.hungry = false;
        }
    }





}

module.exports = Dragon;