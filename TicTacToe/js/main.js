    //keeps track of whose turn it is
let activePlayer = "X";
    //Stores the moves that have been made
let selectedSquares = [];

    //Allows for placing of an "X" or an "O". Ensures that squares cannot be picked twice, and assigns the move
    // to the active player and runs function to determine if the win conditions have been met. 

    function placeXOrO (squareNumber) {        
    if(!selectedSquares.some(element => element.includes(squareNumber))) {
        let select = document.getElementById(squareNumber);
        if (activePlayer === "X") {
            select.style.backgroundImage = "url('images/x.png')";
        } else {
            select.style.backgroundImage = "url('images/o.png')";
        }
        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        if (activePlayer === "X") {
            activePlayer = "O";
        } else {
            activePlayer = "X";
        }
            //sound effect for making a turn
        audio("./media/place.mp3");

            //"O" player's (computer) turn
        if (activePlayer === "O") {
            disableClick();
            setTimeout(function () { computersTurn();}, 1000)
        }
        return true;
    }
        //This is the mechanics of the computer's turn. The computer's choice is a random number
    function computersTurn() {
        let success = false;
        let pickASquare;
        while (!success){
            pickASquare = String(Math.floor(Math.random()*9));
            if (placeXOrO(pickASquare)){
                placeXOrO(pickASquare);
                success= true;
            
            }
        }
    }
}
    //this function lays out the win conditions of tic-tac-toe, 
function checkWinConditions() {
        //this section checks win conditions for player "X"
    if      (arrayIncludes("0X", "1X", "2X")) {drawWinLine( 50, 100, 558, 100) }
    else if (arrayIncludes("3X", "4X", "5X")) {drawWinLine( 50, 304, 558, 304) }
    else if (arrayIncludes("6X", "7X", "8X")) {drawWinLine( 50, 508, 558, 508) }
    else if (arrayIncludes("0X", "3X", "6X")) {drawWinLine( 100, 50, 100, 558) }
    else if (arrayIncludes("1X", "4X", "7X")) {drawWinLine( 304, 50, 304, 558) }
    else if (arrayIncludes("2X", "5X", "8X")) {drawWinLine( 508, 50, 508, 558) }
    else if (arrayIncludes("6X", "4X", "2X")) {drawWinLine( 100, 508, 510, 90) }
    else if (arrayIncludes("0X", "4X", "8X")) {drawWinLine( 100, 100, 520, 520) }
     
        //this section checks the win conditions for player "X"
    else if (arrayIncludes("0O", "1O", "2O")) {drawWinLine( 50, 100, 558, 100) }
    else if (arrayIncludes("3O", "4O", "5O")) {drawWinLine( 50, 304, 558, 304) }
    else if (arrayIncludes("6O", "7O", "8O")) {drawWinLine( 50, 508, 558, 508) }
    else if (arrayIncludes("0O", "3O", "6O")) {drawWinLine( 100, 50, 100, 558) }
    else if (arrayIncludes("1O", "4O", "7O")) {drawWinLine( 304, 50, 304, 558) }
    else if (arrayIncludes("2O", "5O", "8O")) {drawWinLine( 508, 50, 508, 558) }
    else if (arrayIncludes("6O", "4O", "2O")) {drawWinLine( 100, 508, 510, 90) }
    else if (arrayIncludes("0O", "4O", "8O")) {drawWinLine( 100, 100, 520, 520) }

        //If all the spots on the tic-tac-toe board get filled an there is no winner, a tie is called and the
            //game restarts
    else if (selectedSquares.length >= 9) {
        audio ("./media/tie.mp3")
        setTimeout( function () { resetGame(); }, 1000);
    }
    
    
    function arrayIncludes( squareA, squareB, squareC) {
        const a = selectedSquares.includes(squareA)
        const b = selectedSquares.includes(squareB)
        const c = selectedSquares.includes(squareC)

        if ( a === true && b === true && c === true) { return true }
    }
}

    //this makes the user unable to interact with the game while the computer takes their turn
function disableClick () {
    body.style.pointerEvents = "none";
    setTimeout(function() {body.style.pointerEvents = "auto";}, 1000);
}

    //function for accessing the audio in our files, preparing it to be executeable 
function audio (audioUrl) {
    let audio = new Audio(audioUrl);
    audio.play();
}

    //this function determines what the win lines are and then draws them
function drawWinLine (coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById("win-lines")
    const c = canvas.getContext("2d");
        //here the corrdinate variables for the location of the lines are declared
    let x1 = coordX1, 
        y1 = coordY1, 
        x2 = coordX2, 
        y2 = coordY2, 
        x = x1, 
        y = y1; 


    function  animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect (0, 0, 608, 608)
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = "rgba(70,225,33, .8)";
        c.stroke();

        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10;}
            if (y < y2) { y += 10;}
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop);}
        }

        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) {x += 10;}
            if (y > y2) {y -= 10;}
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
        }
    }

        //this function clears the canvas after a win
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

        //this disables clicking while the win sound plays
    disableClick();
        //this is the win sound
    audio("./media/winGame.mp3");
    animateLineDrawing();

        //this resets the game
    setTimeout(function () { clear (); resetGame(); }, 1000);
}

    //this resets the game when it ends in either a draw or a win
function resetGame(){
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i))
        square.style.backgroundImage = ""
    }
    selectedSquares = [];
}

