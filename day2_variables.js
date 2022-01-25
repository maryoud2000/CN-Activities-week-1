//-------------------------------------------------------------------------------
//day two
console.log("all around the world".charAt(7).toUpperCase());
console.log("all around the world".toUpperCase().charAt(5));

let pasword = 000; //can be change
const pasword2 = 111; //cant be change

//-------------------------------------------------------------------------------
let favouriteDrink = "coffee";
console.log(favouriteDrink);
console.log("My favourite drink is " + favouriteDrink);
console.log(`My favourite drink is ${favouriteDrink} because its nice`);

//-------------------------------------------------------------------------------
let car = "Peugeot";
if(car == "Ford" || car == "GM"){
 console.log("You've got an American car!");
}
else if(car == "Peugeot" || car == "Citroen"){
 console.log("You've got a French boy!");
}
else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
 console.log("Japanese cars are dead quiet!");
}
else if(car == "Mercedes"){
 console.log("You are proper posh German!");
}
else if(car == "Volkswagen"){
 console.log("German aren't that bad at all!");
}
else if(car == "Hyundai" || car == "Kia"){
 console.log("South Korean cars are getting popular!");
}
else{
 console.log("Your car is not in the top ten companies in the world!");
}

//-------------------------------------------------------------------------------
let car2 = "Honda";
switch(car2){
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
        break;
    case "Peugeot":
    case "Citroen":
        console.log("You've got a French boy!");
        break;
    case "Honda":
    case "Toyota":
    case "Suzuki":
        console.log("Japanese cars are dead quiet!");
        break;
    case "Mercedes":
        console.log("You are proper posh German!");
        break;
    case "Volkswagen":
        console.log("German aren't that bad at all!");
        break;
    case "Hyundai":
    case "Kia":
        console.log("South Korean cars are getting popular!");
        break;
    default:
        console.log("Your car is not in the top ten companies in the world!!");
}

//-------------------------------------------------------------------------------
const grade1 = 40;
switch (true) {
    case grade1 >= 70:
        console.log("Distinction");
        break;
    case grade1 >= 60:
        console.log("Merit");
        break;
    case grade1 >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}

//or
let grade = 40;
if (grade >= 70){
    console.log("Distinction");
}
else if (grade >= 60){
    console.log("Merit");
}
else if (grade >= 50){
    console.log("Pass");
}
else {
    console.log("Failed");
}


//Activity-------------------------------------------------------------------------------
let age = 20;
if(age > 17) {
    console.log("Yes I can serve you.");
}
else if(age <= 17) {
    console.log("You aren't old enough!");
}
else {
    console.log("wrong age format!"); 
}
//or
switch (true) {
    case age > 17:
        console.log("Yes I can serve you.");
        break;
    case age <= 17:
        console.log("You aren't old enough!");
        break;
    default:
        console.log("wrong age format!");
}

//activity 
string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
let vowels = ['a','e','i','o','u'];   
let strR = str.split('').reverse().join();
console.log(strR.indexOf(vowels));
