class Ogre {
    constructor(ogreDetails) {
        this.name = ogreDetails.name;
        this.home = ogreDetails.abode || 'Swamp';
        this.swings = 0;
    }
    swingAt (target) {
        this.swings += 1;
        if (target.encounterCounter === 6 && this.swings === 2) {
            target.knockedOut = true;
        }
    }
    encounter(target) {
        target.encounterCounter += 1;
        console.log(`'Encounter : ${target.encounterCounter}'`)
        if (target.encounterCounter > 0 && target.encounterCounter % 3 === 0) {
            this.swingAt(target);
        }
    }
    apologize(target) {
        target.knockedOut = false;
    }
}
module.exports = Ogre;