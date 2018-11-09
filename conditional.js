var age = prompt("What's your age?");
if (age<0){
    console.log("ERROR!");
}
else if (age == 21) {
    console.log("Happy 21st Birthday!!!");
}
else if (age % 2 === 1) {
    console.log("Your Age Is Odd!");
}
else if (age % Math.sqrt(age) === 0) {
    console.log("Your Age is a perfect Square")
}
else {
    console.log("Okay!")
}