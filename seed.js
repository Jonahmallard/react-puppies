require('dotenv').config();
require('./config/database');

const Puppy = require('./models/puppy');

(async function() {

  await Puppy.deleteMany({});
  const puppies = await Puppy.create([
  {name: 'Hamburger', age: 5},
  {name: 'Turkey Sandwich', age: 6},
  {name: 'Hot Dog', age: 3},
  {name: 'Crab Plate', age: 1},
  {name: 'Fried Shrimp', age: 1},
  {name: 'Whole Lobster', age: 2},
  {name: 'Taco', age: 1},
  {name: 'Burrito', age: 4},
  {name: 'Pizza Slice', age: 3},
  {name: 'Spaghetti', age: 7},
  {name: 'Garlic Bread', age: 1},
  {name: 'French Fries', age: 2},
  {name: 'Green Salad', age: 3},
  {name: 'Ice Cream', age: 1},
  {name: 'Cup Cake', age: 0},
  {name: 'Custard', age: 2},
  {name: 'Strawberry Shortcake', age: 3},
  {name: 'Milk', age: 0},
  {name: 'Coffee', age: 0},
  {name: 'Mai Tai', age: 8},
  {name: 'Beer', age: 3},
  {name: 'Wine', age: 7},
  ]);

  console.log(puppies)

  process.exit();

})();