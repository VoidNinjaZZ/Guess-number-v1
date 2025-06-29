const realNumber = Math.floor(Math.random() * 100)+1;
attemptCount=0;
// console.log(realNumber);{

document.getElementById("submit").onclick= function main(){


let guessedNumber=document.getElementById("value").value;
let result= document.getElementById("result");
let attemptDisplay= document.getElementById("attempt");

attemptCount++;
attemptDisplay.textContent=`Attempts: ${attemptCount}`;

if (isNaN(guessedNumber) || guessedNumber < 1 || guessedNumber > 100) {
    result.textContent = "⚠️ Please enter a valid number between 1 and 100.";
    return;
}
if(guessedNumber<realNumber){
result.textContent="Your guess is too low. Try again.";
}
else if(guessedNumber>realNumber){
result.textContent="Your guess is too high. Try again.";

}
else {
    result.textContent="Congratulation!You guessed the right number";
    document.getElementById("submit").disabled = true;
    document.getElementById("value").disabled = true;
}

}

