//Question 1
var prompt = require('prompt-sync')();
const age = prompt("Enter your age: - ");

if (age < 18) {
    console.log("You get a 20% discount!");
}
else if (age > 18 && age <= 65) {
    console.log("Normal ticket price applies.");
}
else
    console.log("You get a 30% senior discount!");
console.log("");

//Question 2
//Always use ParseInt/ParseFloat because prompt function returns strings
var length = parseFloat(prompt("Enter the Length of the Rectangle: - "));
var breadth = parseFloat(prompt("Enter the Breadth of the Rectangle: - "));

const area = length * breadth;

console.log("Area of the Rectangle is: - ", area, "\n");

//Question 3
//Using Objects
const product1 = {
    name: "Smartphone",
    price: 399.99,
    inStock: true
};

const product2 = {
    name: "Laptop",
    price: 999.99,
    inStock: false
};

const product3 = {
    name: "Headphones",
    price: 49.99,
    inStock: true
};

console.log(product1);
console.log(product2);
console.log(product3, "\n");

//Using Constructor Function
function ObjTemp(name, price, inStock) {
    this.name = name;
    this.price = price;
    this.inStock = inStock;
}

let obj1 = new ObjTemp("Smartphone", 20000, true);
let obj2 = new ObjTemp("Laptop", 60000, false);
let obj3 = new ObjTemp("Headphones", 10000, true);

console.log(obj1);
console.log(obj2);
console.log(obj3, "\n");

//Question 4
const guestList = ['Tushar', 'Utkarsh', 'Mayank', 'Shubham', 'Satyam'];
const nametoCheck = prompt("Enter Your Name: - ");

//Includes function in Array
if (guestList.includes(nametoCheck))
    console.log(`Welcome to the Party, ${nametoCheck}.`);
else
    console.log("Sorry, You're not on the Guest List.");