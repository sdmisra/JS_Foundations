
class Direwolf {
    constructor(wolfName, newHome, otherSize) {
        this.name = wolfName;
        this.home = 'Beyond the Wall';
        if (newHome) {
          this.home = newHome;
        }
        this.size = 'Massive';
        if (otherSize) {
          this.size = otherSize;
        }
        this.starksToProtect = [];
        this.huntsWhiteWalkers = true;
    }
    protect(targetStark) {
        if (this.starksToProtect.length <2 && this.home === targetStark.location) {
            targetStark.safe = true;
            this.starksToProtect.push(targetStark);
            this.huntsWhiteWalkers = false;
        }
    }
    leave(targetStark) {
        for (var i=0; i < this.starksToProtect.length; i++) {
            if (targetStark.name === this.starksToProtect[i].name) {
                this.starksToProtect.splice(i, 1);
                targetStark.safe = false;
            }
        }
    }
}

module.exports = Direwolf;