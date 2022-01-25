//Loops activities:
// Activity(1):
let favFilms = ["Captin Fillips",
                "Little Man",
                "The Godfather",
                "The Dark Knight",
                "Seven Samurai"]; // Create an array that lists your favourite films,up to 5 elements
favFilms.push("Lawrence of Arabia", "War of the Worlds");// Add 2 more using a method
for (i = 0; favFilms.length > i; i++){
    console.log(favFilms[i]);
} // Use a loop to cycle through the array

//Activity(2): Generate 6 random numbers between 1-50
for(let i = 0; i < 6; i++){
 console.log(Math.random() * 49 + 1);
}

//Activity(3): If we can create a loop to put 0-9 on the screen, how can we count from 9 to 0?
for(let i = 9; i > -1; i--){
 console.log(i);
}

//Activity(4):
let films = ["Captin Fillips",
            "Little Man",
            "Ghostbusters",
            "The Dark Knight"];// Displays 4 films stored in an array 
let filmCheck = "Ghostbusters";
if (films[2] == filmCheck) {
    console.log("yey it's ghostbusters");}
else {
console.log("“booo, we want ghostbusters");} //checks if the 3rd film in the array is Ghostbusters.

//activity (5):
for(let i = 0; i < 6; i++){
    let num = Math.round(Math.random() * 29 + 1); 
    if(num % 7 == 0){
        console.log(`${num} is disivable by 7`);}
    else {
        console.log(`${num} is'nt disivable by 7`);
    }
}

//activity (7)
for (i = 1; i <= 20; i++){
    for(primeCheck = 2; primeCheck < i ; primeCheck ++){
        if(i % primCheck == 0){
            console.log(`${i} is a prime number.`);}
        else {
            console.log(`${i} is'nt a prime number.`);}
    }   
}

