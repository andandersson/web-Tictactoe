var turn = 'X';
const squares = document.querySelectorAll(".square");
var squareArray = ["", "", "", "", "", "", "", "", ""];
var eventOn;
var gameOver = false;
var xPiece = "<img src = 'x-icon.webp' class = 'icon'>";
var oPiece = "<img src = 'o-icon.png' class = 'icon'>";

/**
 * adding eventlistener to the "new-game"-button.
 */
document.querySelector(".newGame").addEventListener("click", newGame);

/**
 * starting the game and adding eventlisteners to
 * the squares
 */
for (let i = 0; i<squares.length; i++){
    console.log("event");
    squares[i].addEventListener("click", function(event){
    eventOn = true;    
    checkSquare(event, i)
    });
}   

/**
 * Switching the turn of the players
 */
function switchTurn(){
    if (turn == 'X'){
        turn = 'O'
    }
    else{
        turn = 'X'
    }
}

/**
 * This function is checking if the squares clicked on are empty.
 * If they are empty, it is placing a piece according to who
 * is playing, and then checking if the board is full, or if
 * there is a winner.
 * @param {
 * } eve a parameter fot the event, needed when the function is called
 * and for activating the eventlistener.
 * @param {*} num This variable is checking which number the square clicked
 * on has.
 * @returns The return is only activated if none of the other steps
 * are executed.
 */
function checkSquare (eve, num){
    const square ='';
    let rowChecking;
    square === eve.toElement.innerHTML;
    if(squareArray[num] === "" && gameOver === false){ 
        if(turn === 'X'){
            eve.toElement.innerHTML =xPiece;
            squareArray[num] = 'X';
        }
        else{
            eve.toElement.innerHTML =oPiece;
            squareArray[num] = 'O';
        }
        if(checkRow(num)==true){
            alert(`game over!`);
            gameOver = true;
        }
        if(checkCol(num)==true){
            alert(`game over!`);
            gameOver = true;
        }
        if(checkDiagonal()== true){
            alert(`game over!`);
            gameOver = true;
        }
        checkIfDraw();
        switchTurn();
    }
   else{
    return;
   }
}

/**
 * Checking if there are three pieces in a row.
 * @param {*} position the number of the position.
 * @returns True if there is a row, otherwise it is false.
 */
function checkRow(position){
    let rowPos;
    if(position -3 <0){
       rowPos = 0; 
    }
    else if(position -3 >= 0 && position -3 <3){
        rowPos = 3; 
     }
     else{
         rowPos =6;
     }
     console.log("rowPos: ", rowPos);
    
     for (let i =0; i<3; i++){
         if(squareArray[i+rowPos] !=turn){
         
             return false;
         }
     }
     console.log("true")
     return true;
}

/**
 * Checking if there are three in a column.
 * @param {*} position The number of the position.
 * @returns True if three in a column, false otherwise.
 */
function checkCol(position){
    let col;
    if(position % 3 === 0){
        col = 0;
    }
    else if(position % 3 === 1){
        col = 1;
    }
    else{
        col = 2;
    }
    console.log("col: ", col);

    for(let i = 0; i<3; i++){
        if(squareArray[i*3+col] != turn){
            return false;
        }
    }
    console.log("true")
    return true;
}

/**
 * Checking if there are three in a row in a diagonal.
 * @returns true or false.
 */
function checkDiagonal(){
    if(squareArray[0] === turn && squareArray[4]=== turn && squareArray[8] === turn){
        return true;
    }
    else if(squareArray[2] === turn && squareArray[4]=== turn && squareArray[6] === turn){
        return true;
    }
    else{
        return false;
    }
}

/**
 * if the "new game"-button is cklicked, all pieces are removed,
 * and the game is starting all over.
 */
function newGame() {
   for (let i = 0; i<9; i++){
       squares[i].innerHTML ="";
       squareArray[i] ="";
   }
   gameOver = false;
   turn = 'X';
}

/**
 * Checking if the board is full.
 * @returns true or false.
 */
function checkIfDraw(){
    for(s of squareArray){
        console.log(s);
        if(s === ""){
          
        return false;
        }
    }
    alert("Draw!");
}
