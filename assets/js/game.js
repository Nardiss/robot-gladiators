//window.alert("This is an alert! JavaScript is running!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// You can also log mutiple values at once like this
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

// this creates a function named "fight"

var fight = function  () {
    // Alert players that they are starting the round
    window.alert ("Welcome to Robot Gladiators!");
    //Subtract the value of 'playerAttack' fro the value of 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable
    enemyHealth = enemyHealth -playerAttack;
    // Log a resulting message to the console so we know that it worked.
    console.log(
        playerName + "attacked" + enemyName +"." + enemyName + "now has" + enemyHealth + "health remaining."
    );
    //check enem's health
    if (enemyHealth <= 0){
        window.alert(enemyName  + "has died");
    }
    else {
        window.alert (enemyName + "still has" + enemyHealth + "healthleft.");
    }
    // Subtract the value of 'enemyAttack' from the value of the 'playerHealth' and use that result to update the value in the 'playerHealth' variable.
    playerHealth = playerHealth - enemyAttack;
    // Log a resulting message to the console so we know that it worked.
   console.log (
       enemyName + "attacked" + playerName +" . " + playerName + "now has " + playerHealth + "health remaining."
   );
   // check player's health
   if (playerHealth <= 0 ) {
       window.alert (playerName + "has died!");
   }
   else {
       window.alert (playerName + "still has" + playerHealth + "health left.");
   }
   
};
fight();