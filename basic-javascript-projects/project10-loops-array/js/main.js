
function call_loop(){      //this function posts all the contents in the instruments variable one line at a time
    var instruments = ["guitar", "piano", "clarinet", "bass", "violin", "trumpet", "flute"]; 
    var content = "";
    var y;
    function for_loop() {
        for (y = 0; y < instruments.length; y++)    {
            content += instruments[y] + "<br>";
        }
    }
    for_loop()
    document.getElementById("loop").innerHTML = content;


}
                // this function demonstrates the use cases of a constants
function constant_function(){
    const person= { gender:"male", height:"5\'8\"", weight:"160 lbs", hair_color:"blond", eye_color:"hazel"}
    person.shoe_size = 10;
    person.weight = "155 lbs";
    document.getElementById("constant").innerHTML = "My shoe size is " + person.shoe_size + ". My weight is " + person.weight;
}

let car = {         //this creates an object with specific properties and a function that will return the 
    make: " Honda",   // contents of the properties in sentece form. 
    model: " Civic", 
    year: 2005, 
    color: " Silver ",
    transmission: " 4-speed manual ",
    description: function() {
        return "I drive a " + car.color + car.year + car.make + car.model + " that has a " + car.transmission;
    }
    
}
                          //this runs the function from the car object and inserts the result on index.html
document.getElementById("object_activity").innerHTML = car.description(); 


function loopBreak(){  //this demonstrates the use of break and conintue. Adjust var x to see different results.
    var x = 2;
    while (x <10) {
        x++ ;
        if (x == 2)   break;
        if (x == 4)  continue;
    
       
        document.getElementById("loopBreak").innerHTML += x;
    }
}