// const

let brand1 = "Amigoscode";
console.log(brand1);
brand1 = {};
console.log(brand1);
brand1 = 10;
console.log(brand1);
brand1 = function() {
    return "Hello";
}
console.log(brand1)
console.log(brand1());

const brand2 = "Amigoscode";
// not allowed
// brand = 10;
console.log(brand2);

const brandObject = {};
brandObject["brand"] = brand2;
console.log(brandObject);
delete brandObject.brand;
console.log(brandObject);

// When to Use Const vs Let
// always use const only in loops we use let