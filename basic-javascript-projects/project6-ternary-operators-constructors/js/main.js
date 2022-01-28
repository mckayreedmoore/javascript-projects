function rideFunction () {  // This is a ternary operator. From a user's input it determines whether or not someone is tall enough to ride the ride
    var height, canRide;
    height = document.getElementById("height").value;
    canRide = (height < 52)? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = canRide + " to ride";
}

function voteFunction () { // this is a ternary operator. From a user's input it determines if they are old enough to vote. 
    var canVote, age;
    age = document.getElementById("age").value;
    canVote = (age<18)? "You are too young to vote":"You are old enough to vote";
    document.getElementById("vote").innerHTML = canVote;
}

function vehicle(make, model, year, color){ //this is a class constructor for vehicles
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}
var jack = new vehicle ("dodge", "viper", 2020, "red"); //these are instatiations of a class, called objects
var emily = new vehicle ("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle ("ford", "pinto", 1971, "mustard");

function myFunction() {  // Here is a function that pulls information from an object 
    document.getElementById("newAndThis").innerHTML = "Erik drives a " + 
    erik.vehicleColor + "-colored " + erik.vehicleModel + " manufactured in " + erik.vehicleYear;
}


function cat(claws, gender){ // a new class constructor
    this.clawStatus = claws;
    this.catGender = gender;
}

var garfield = new cat ("no claws", "male");
function getCat(){
    document.getElementById("cat").innerHTML = "Claw Status: " + garfield.clawStatus + " Gender: " + garfield.catGender;
}

function nested_function () {  //this function is a count-down function. You input a number and it iterates decrementally till it reaches 0
    var countDownNumber;
    countDownNumber = document.getElementById("countDownNumber").value;
    document.getElementById("nested_function").innerHTML = countDown();
    function countDown(){
        while (countDownNumber > 0) {
            document.write(countDownNumber + ",");
            countDownNumber --;
            
        }
    }
}   
