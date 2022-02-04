    // This generatres a receipt with all the specifications for the pizza, as well as 
        //how much the pizza will cost
function getReceipt() {
    var text1 = "<h3>You Ordered</h3>";
    var runningTotal = 0;
    var sizeTotal = 0;
        //this gets all the sizes of the pizza and creates an array of them. 
    var sizeArray = document.getElementsByClassName("size");
        //this for loop iteratres through the array of sizes, storing the one that is checked in var selectedSize
    for (var i = 0; i < sizeArray.length; i++) {
        if (sizeArray[i].checked) {
            var selectedSize = sizeArray[i].value;
            text1 = text1 + selectedSize+"<br>";
        }
    }


        //this determines the price for the sizes of pizza
    if (selectedSize === "Personal Pizza") {
        sizeTotal = 6;
    } else if (selectedSize === "Medium Pizza") {
        sizeTotal = 10;
    } else if (selectedSize === "Large Pizza") {
        sizeTotal = 14;
    } else if (selectedSize === "Extra Large Pizza") {
        sizeTotal = 16;
    } else if 
        (selectedSize === "Extra Extra Large Pizza") {
            sizeTotal = 18;
        }
        runningTotal = sizeTotal;
        console.log(selectedSize+" = $"+ sizeTotal+".00");
        getTopping(runningTotal,text1);
        console.log(sizeTotal);
    };


    //this gets all the toppings and stores them in an array. From this it iterates through
        //all the toppings storing those that are marked as checked. 
function getTopping(runningTotal,text1) {
    var toppingTotal = 0;
    var selectedTopping = [];
    var toppingArray = document.getElementsByClassName("toppings");
    for (var j = 0; j < toppingArray.length; j++) {
        if (toppingArray[j].checked) {
            selectedTopping.push(toppingArray[j].value);
            console.log("Selected topping item: ("+toppingArray[j].value+")");
            text1=text1+toppingArray[j].value+"<br>";
            }
    }
        //this determines the price of the toppings. 
    var toppingCount = selectedTopping.length;
    if (toppingCount > 1) {
        toppingTotal = (toppingCount-1);
    } else {
        toppingTotal = 0;
    }

        //this section is finalizes the total, and then prints out the receipt and associated price
    runningTotal = runningTotal + toppingTotal;
    console.log("total selected topping items:"+toppingCount.length);
    console.log(toppingCount +"topping - 1 free topping="+"$"+toppingTotal+".00");
    console.log("topping text1: " + text1);
    console.log("Purchase Total: "+"$"+runningTotal+".00");
    document.getElementById("showText").innerHTML=text1;
    document.getElementById("totalPrice").innerHTML = "<h3>Total:<strong>$"+
        runningTotal+".00"+"</strong></h3>";
};
        
