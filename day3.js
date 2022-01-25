let theGrid = ["x", " ", "o"] //defining array
let theArry =   [["x", " ", "o"], //define array inside array or list inside list
                 ["x", "o", "o"],
                 ["x", "x", "o"],
];
console.log(theArry[1][0]);  //calling an item in list
console.log(theArry[2][1]);
console.log(theArry[1][1]);

//Example
let theGrid = [["o", "x", "o"], 
               ["o", " ", "o"], 
               ["x", " ", "o"]];
let toCheck;

for (let i = 0; i < 2; i++) {
    if (i == 0) {
        toCheck = "x";
    } else {
        toCheck = "o";
    }

    if (theGrid[0][0] == toCheck && theGrid[0][1] == toCheck && theGrid[0][2] == toCheck) {
        console.log("You won!");
    }
}

//Functions
const pressGrindBeans = () => {
 console.log("Grinding for 20 seconds");
}
pressGrindBeans();

//Example
let coffeeIsGrinding = false;
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();

//Example
const cashWithdrawal = (amount, accnum) => {
 console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);

//Example
let accnum = 50449921;
let balance = 10;
let amount = 100;

const cashWithdrawal = (amount, accnum) => {
     if (balance >= amount){
         balance -= amount;
         console.log(`Withdrawing ${amount} from account ${accnum} the remaining balance is ${balance}`);
       
    }
    else {
        console.log("You have no enough balance!");
    }}

cashWithdrawal(amount, accnum);

//Example
const addUp = (num1, num2) => {
    return num1 + num2;
    }
let myNumber = addUp(7,3) + 30;
console.log(myNumber);

//Example of calling function inside function
const multiplyByNineFifths = (celsius) => {
 return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
 return multiplyByNineFifths(celsius) + 32;
};

console.log("The temperature is " + getFahrenheit(15) + "°F");

//Example
const squre = function(number) {
    return number * number;
};
squre (5);


