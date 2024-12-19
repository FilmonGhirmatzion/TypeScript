// let foundd: boolean = true;
// let gradee: number = 88.6;
// let firstNamee: string = "Anup";
// let lastNamee: string = "Kumar";
// console.log(foundd); 
// console.log("The grade is " + gradee);

// for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
console.log("################################################################")

// forlop array numbers
let reviews: number[] = [2, 3, 5, 7, 11, 13, 17, 19];
for (let i = 0; i < reviews.length; i++) {
    console.log(i, reviews[i]);
}
console.log("################################################################")

let sportsOne: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];

for (let i = 0; i < sportsOne.length; i++) {
    console.log(sportsOne[i]);
}
console.log("################################################################")

let sportsTwo: string[] = ["Golf", "Cricket", "Tennis", "Swimming"];
for (let tempSport of sportsTwo) {
    if (tempSport == "Cricket") {
        console.log(tempSport + " << My Favorite!");
    } else {
        console.log(tempSport);
    }
}