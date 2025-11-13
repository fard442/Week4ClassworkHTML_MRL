// ================================================
// JavaScript Object Challenges
// ================================================

// Challenge 1: Make Your First Object
// Create an object called car with three properties:
// brand, model, and year. Give them any values you like.
// Log the whole object, then log just the brand.

// Your code here:

let car = {
    brand : "Hell car",
    model : "cool car of human souls",
    year : 1000
}

console.log(car);
console.log(car.brand);

// -----------------------------------------------

// Challenge 2: Change a Property
// Using your car object from Challenge 1, change the year to a newer one.
// Then log a message like "My car is now a 2023 Toyota!"

// Your code here:

car.year = 2100;
console.log("my car is now a "+car.year+" "+car.brand+".")


// -----------------------------------------------

// Challenge 3: Add a New Property
// Add a new property called color to your car object.
// Then log "My car is [color]" using the color you added.

// Your code here:

car.color = "red";
console.log("my car is "+car.color)


// -----------------------------------------------

// Challenge 4: Nested Object
// Create an object called students with two student objects inside.
// Both students should have a grade for math and art.
// Log each student's art score.

// Your code here:


let students = {
    student1Art : 4,
    student1Math : 99,
    student2Art : 85,
    student2Math : 65
}
console.log("1st student's art score: "+students.student1Art);
console.log("2nd student's art score: "+students.student2Art);


// -----------------------------------------------

// Challenge 5: Combining Objects and Functions
// Create an object called player with properties: name and score.
// Add a function called addPoints(points) inside the object
// that increases player.score by the number given and logs the new score.
// Call addPoints() a few times to test it.

// Your code here:

let player = {
    name:"Finger",
    score:0,
    addPoints:function(points){
        this.score += points
        console.log("Player score is now: "+this.score)
    }
}
player.addPoints(5)
player.addPoints(5)
player.addPoints(7)
player.addPoints(3)






// ================================================
// End of Object Challenges
// ================================================
