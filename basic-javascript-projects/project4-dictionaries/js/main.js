function myDictionary () {  //this is a dictionary containing the information about a cat
    var animal = {
        animalType:"cat", 
        bodySize:"small",
        hairType:"short", 
        furColor:"black", 
        age: 3,
        age: 1, //here the age key has two different values. This was done to see what value the computer would 
    };              //give preference to. The last value is the one the computer uses, where there are 
                        //KVPs with identical keys
    delete animal.furColor; //this deletes the furColor kvp
    document.getElementById("dictionary").innerHTML = animal.furColor; //this attempts to display the furColor value
                                                                            //though it has been deleted
                                                                            //it returns undefined
} 