var y = ("joe");
var x = ("mama");

function  demo () {             //this prints a string by ID
    document.getElementById("demoID").innerHTML = ("you fell for my trap");

}

function makeBlue () {      //this fuction concatenates variables x and y and then prints them, creates a new variable
                                //as the concatenation and prints it, and then prints them in blue
    document.write(y + " " + x);
    var z = (y + " " + x);
    document.write(z);
    document.write(z.fontcolor("blue"));
}

function demo2 () {                         //this fuction creates a string variable, makes it blue
    var thisvar ="here is the blue" ;           // and then concatenates aa string to it and prints it. 
    thisvar = thisvar.fontcolor("blue");
    thisvar += " and i was able to concatenate it";
    document.getElementById("demoID2").innerHTML = thisvar;
}