let drinksArray = ["coke", "pepsi", "water", "sprite"];
let drinkCost = [1, 1.5, 1, 2];
// let multiAray = [["coke", "pepsi", "water", "sprite"], [1, 1.5, 1, 2]];
let userBalance = 10;

const checkDrinks = () => {
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(drinksArray[i]);
    }
}
const checkBalance = () => {
    console.log(`The available drinks are:`);
    for (let i = 0; i < drinksArray.length; i++) {
        console.log(`${drinksArray[i]}: £${drinkCost[i]}`)
    }
    console.log(`Your available balance is: £${userBalance}`);
}
const checkSelection = (choice) => {
    if (userBalance >= drinkCost[choice]) {
        console.log(`Enjoy your ${drinksArray[choice]}, you've got good taste!`);
    }
}
checkDrinks();
checkBalance();
checkSelection(3);

//activity:
let day = "Tuesday";
let alarm = "none";
const set = {
    //day: ["Moday","Tuesday","Wednesday","Thursday","Friday", "Saturday", "Sunday"],
    weekendAlarm: "no alarm needed",
    weekdayAlarm: "get up at 7am",
};
if (day == "Saturday" || day == "Sunday"){
    alarm = set.weekendAlarm;
    console.log(set.weekendAlarm);
}
else {
    alarm = set.weekdayAlarm;
    console.log(set.weekdayAlarm);
}

//activity
const pet = {
    nameOfPet: "Sue",
    typeOfPet: "Cat",
    age: 2,
    colour: "Black",
    petEat: function() {return `${this.nameOfPet} is eating`;},
    petDrink: function() {return `${this.nameOfPet} is drinking.`;}
    }
console.log(pet.petEat());
console.log(pet.petDrink());