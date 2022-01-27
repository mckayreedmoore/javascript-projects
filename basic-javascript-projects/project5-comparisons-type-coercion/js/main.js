function coercionDemo(){
    var x = 5;
    var y = "10";
    document.getElementById("coercion").innerHTML = x + y; //this concatenates the two variables because they are not both integers. 
    }

function typeOfDemo(){  //this is a demo that describe the datatype of something that triggers when a button is pressed. 
    var z = 15
    document.getElementById("typeof").innerHTML = typeof z;
}

document.write(typeof "this here string"); //this tells what kind of datatype is given. 

function posInfinity(){
    document.getElementById("posInfinity").innerHTML = 3e310;
}
function negInfinity(){
    document.getElementById("negInfinity").innerHTML = -3e310;
}

function booleanLogic(){
    document.getElementById("booleanLogic").innerHTML = (3 > 9) + " ... wow that was exciting ... " + (9>3) + " ... that one was even more exciting ... ";
    
}


function returnOp(){
    document.getElementById("not").innerHTML = !(3<7);
}
function returnNorm(){
    document.getElementById("norm").innerHTML = !(3>7);
}