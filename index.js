// Prompt 1:
// Clean the coffee_data file:

// Checklist:
// a. All prices should be numbers.
// b. All items should be strings.
// c. Objects and properties should have commas separating them.
// d. Connect the coffee_data.js file to the index.js file.

const coffeeMenu = [
  {
    name: "cappuccino",
    price: 8,
    seasonal: false,
  },
  {
    name: "espresso",
    price: 5,
    seasonal: false,
  },
  {
    name: "latte",
    price: 5,
    seasonal: false,
  },
  {
    name: "affogato",
    price: 9,
    seasonal: true,
  },
  {
    name: "macchiato",
    price: 6,
    seasonal: false,
  },
  {
    name: "americano",
    price: 7,
    seasonal: false,
  },
  {
    name: "iced coffee",
    price: 6,
    seasonal: false,
  },
  {
    name: "frappe",
    price: 8,
    seasonal: false,
  },
  {
    name: "cuban espresso",
    price: 10,
    seasonal: true,
  },
];

module.exports = coffeeMenu;

var totalMenu = [];
for (let i = 0; i < coffeeMenu.length; i++) {
  totalMenu.push(coffeeMenu[i].name);
}
console.log(totalMenu);

var cheapDrinks = [];
for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price <= 5) {
    cheapDrinks.push(coffeeMenu[i].name);
  }
}
console.log(cheapDrinks);

var evenDrinks = [];
for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].price % 2 == 0) {
    evenDrinks.push(coffeeMenu[i].name);
  }
}
console.log(evenDrinks);

var totalPrice = 0;
for (let i = 0; i < coffeeMenu.length; i++) {
  totalPrice = coffeeMenu[i].price + totalPrice;
}
console.log(totalPrice);

var susDrinks = [];
for (let i = 0; i < coffeeMenu.length; i++) {
  if (coffeeMenu[i].seasonal) {
    susDrinks.push(coffeeMenu[i].name);
  }
}
console.log(susDrinks);

for (let i = 0; i < susDrinks.length; i++) {
  console.log(susDrinks[i] + " with imported beans");
}
