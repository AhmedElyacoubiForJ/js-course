// Objects
var person = {
    firstName: "Jamila",
    age: 21,
    isFemale: true,
    balance: 100.32,
    dob: new Date(2000, 1, 28).toJSON(),
    address: {
        city: "Essen",
        postCode: "45138"
    }
};
console.log(person.firstName);
console.log(person.age);
console.log(person.balance);
console.log("")
console.log(person.address)
console.log("")
console.log(person.address.city);
console.log("")
console.log(Object.values(person));
console.log("")
console.log(Object.keys(person));
console.log("")
console.log(JSON.stringify(person))