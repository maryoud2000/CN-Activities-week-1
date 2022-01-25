//Activity 1: Write code that stores your name, age, and favouritecolour
let myName = "OSAMA";
let myAge = 37;
let myFavCol = "Green";
console.log(`My name is ${myName}, my age is ${myAge} and my favourite colour is ${myFavCol}.`)

console.log(`Hi! My name is ${myName.toUpperCase()} and the last letter in my name is ${myName.charAt(3).toUpperCase()} .I am ${myAge} years old, and my favourite colours length is ${myFavCol.length}.`);

//Activity 2: Write code which stores what you may eat today for breakfast, lunch, and dinner
let breakfast = "egg";
let lunch = "mexican chicken";
let dinner = "shawrma";
console.log(`I eat ${breakfast} for breakfast, ${lunch} for lunch and I will have ${dinner} for dinner.`);
breakfast = "noodle and cashew salad";
lunch = "Smoky chicken";
dinner = "macaroni and cheese";
console.log(`I eat ${breakfast} for breakfast, ${lunch} for lunch and I will have ${dinner} for dinner.`);

//Activity 3: Write code which will calculate how many days from today’s date to your birthday
var currentDate = Date.parse("2022, 01 , 11") 
var birthday = Date.parse("2022, 06 , 27") 
var diff = new Date(birthday - currentDate)
var days = diff/1000/60/60/24
console.log(Math.floor(days))

//Activity 4:
let var1 = "x";
let var2 = "o";
let var3 = " ";
let var4 = "x";
let var5 = "x";
let var6 = " ";
let var7 = "o";
let var8 = " ";
let var9 = " ";
console.log("   |   |   ");
console.log(`${var1}  | ${var2} | ${var3} `);
console.log("   |   |   ");
console.log("------------");
console.log("   |   |   ");
console.log(`${var1}  | ${var1} | ${var3} `);
console.log("   |   |   ");
console.log("------------");
console.log("   |   |   ");
console.log(`${var2}  | ${var3} | ${var3} `);
console.log("   |   |   ");
