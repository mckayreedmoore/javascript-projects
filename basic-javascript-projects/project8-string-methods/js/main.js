function compSentence (){
    var part1 = "jim";
    var part2 = "bo";
    var part3 = " the";
    var part4 = " slayer of dragons.";
    var wholeSentence = part1.concat(part2, part3, part4);
    document.getElementById("sentence").innerHTML = wholeSentence;
}

function slicer(){   // slices a string at a specifed section
    var sentence = "here is a sentence that will get sliced";
    var section = sentence.slice(10,39);
    document.getElementById("sliced").innerHTML = section;
}

function upperSearch () {       //puts a string in all uppercase and then searches for "beans" within it
    var beans = "Here is a can of beans";
    var beans = beans.toUpperCase();
    document.getElementById("upperBeans").innerHTML = beans;
    document.getElementById("beansLocation").innerHTML = beans.search("BEANS");
}

function numbIdentify () {  //uses the toString function
    var aNumber = 5;
    document.getElementById("number").innerHTML = aNumber.toString();  
}   

function precise() {        //trims a number with many digits past the decimal down. 
    var longNum = 5.343534534534534;
    document.getElementById("precise").innerHTML = longNum.toPrecision(3);
}

function roundFixed() { //trims a number with many digits past the decimal down and converts it to a string
    var longNum = 4.53453464;
    document.getElementById("fixed").innerHTML = longNum.toFixed(2);
}

function ofValue () {  // brings a string back to a primitive datatype (if it were in a function or method)
    var theValue = "here is a sentence about beans. Just beans."
    document.getElementById("value").innerHTML = theValue.valueOf();
}
