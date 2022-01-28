var x = 10;
var y = 3;



function globalVar (){
    
    document.getElementById("globalVar").innerHTML = x + y;
    }



//function localVar () {
//    var z = 10;
//    var m = 3;
//
//}

//function scopeError () {                 // commented this section of code out because there is an (purposeful) error in it. 
                                            // i think it was causing future lines to not run
//    var m = 10;
//    console.log(m);
//    console.log(z);
//    document.getElementById("three").innerHTML = z+m;
//    
//}


function dateFunction() {
    if (new Date().getHours() < 18) {
    document.getElementById("date").innerHTML = "How are you today?";
    } 
        else {
        document.getElementById("date").innerHTML = "How are you doing this evening?";
        }
}

if (1 < 4) {
    alert("1 is in fact less than 4!");
}


function coinGame(){
    var guessInput, randNum, coinResult, guessResult;
    var guessInput = document.getElementById("guessInput").value; // get user guess

    randNum = (Math.random()*100);    //generates a random number 1-100 in preparation for the coin flip assignemnt
    console.log(randNum);

    if (randNum > 51){                  //this section creates the computer coin flip result, 
        coinResult = "heads";           //assigning heads to "h" and tails to "t"
    }
    else {                      
        coinResult = "tails"
    }

    if (coinResult == guessInput) {        //this checks the user guess with the computer coin result and tells the user what happened.
        document.getElementById("answer").innerHTML = "Congrats! The coin landed " + coinResult;
    }
    else {
        document.getElementById("answer").innerHTML = "Sorry! The coin actually landed " + coinResult + 
        ". Better luck next time!";
    }


}


function time_function () {     //this function pull the time from the computer and then returns a statment 
    var time = new Date().getHours();    //about what time it is
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time > 12 == time < 18) {
        reply = "It is afternoon!"
    }
    else {
        reply = "It is the night time!";
    }
    document.getElementById("time_of_day").innerHTML = reply;
}