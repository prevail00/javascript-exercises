const findTheOldest = function(people) {
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();
    let oldestPerson;
    let greatestAge = 0;
    for (const person of people) {
        if (person.yearOfDeath === undefined) {
            person.age = currentYear - person.yearOfBirth;
        }
        else {
            person.age = person.yearOfDeath - person.yearOfBirth;
        }
        if (person.age > greatestAge) {
            greatestAge = person.age;
            oldestPerson = person;
        }
    }
    return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
