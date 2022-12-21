class Fairy {
    constructor(name) {
        this.name = name;
        this.dust = 10;
        this.clothes = {dresses: ['Iris']};
        this.disposition = 'Good natured';
        this.humanWards = [];
    }
    receiveBelief() {
        this.dust += 1
    }
    believe() {
        this.dust += 10
    }
    makeDresses(addedPetals) {
        for (var i = 0; i < addedPetals.length; i++) {
            this.clothes.dresses.push(addedPetals[i])
        }
    }
    becomeProvoked() {
        this.disposition = 'Vengeful';
    }
    replaceInfant(poorInfant) {
        if (this.disposition === 'Vengeful') {
            this.humanWards.push(poorInfant);
            poorInfant.disposition = 'Malicious'
            if (this.humanWards.length >= 3) {
                this.disposition = 'Good natured';
                return poorInfant;
            }
            return poorInfant;
        }
        else return poorInfant;
        
    }
}









module.exports = Fairy;