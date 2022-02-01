function color_function () {
    var colors_output;
    var colors = document.getElementById("color_input").value;
    var color_string = "This is a great color.";
    switch (colors) {
        case "Red":
            color_output = "Red. " + color_string;
        break;
        case "Yellow":
            color_output = "Yellow. " + color_string;
        break;
        case "Green":
            color_output = "Green. " + color_string;
        break;
        case "Blue":
            color_output = "Blue. " + color_string;
        break;
        case "Pink":
            color_output = "Pink. " + color_string;
        break;
        case "Purple":
            color_output = "Purple. " + color_string;
        break;
        default:
            color_output = "Please enter a color exactly as it is shown above.";
    }
    document.getElementById("output").innerHTML = color_output;
}



// editing the canvas
var c = document.getElementById("graphic");
var ctx = c.getContext("2d");

//Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

//Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);


         