class Person {
    constructor(name, mood) {
        this.name = name;
        if (mood === undefined) {
            this.mood = 'frightened'
        }
        else this.mood = mood;
    }
}
module.exports = Person;