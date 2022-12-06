class Pirate {
    constructor(name, job) {
        this.name = name;
        if (job === undefined) {
          this.job = 'scallawag';
        }
        else {
          this.job = job;
        }

    }


}

module.exports = Pirate;