function vehicle(make, model, year, color){
    this.vehicleMake = make;
    this.vehicleModel = model;
    this.vehicleYear = year;
    this.vehicleColor = color;
}
var jack = new vehicle ("dodge", "viper", 2020, "red");
var emily = new vehicle ("jeep", "trail hawk", 2019, "white and black");
var erik = new vehicle ("ford", "pinto", 1971, "mustard");
function myFunction() {
    document.getElementById("newAndThis").innerHTML = "Erik drives a " + 
    erik.vehicleColor + "-colored " + erik.vehicleModel + " Manufactured in " + erik.vehicleYear;
}