window.alert("This is an alert! JavaScript is running!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// You can also log mutiple values at once like this
// console.log(playerName, playerAttack, playerHealth);


console.log(enemyName);
console.log(enemyName.length);
console.log(enemyName[0]);
console.log(enemyName[3]);

// this creates a function named "fight"

var fight = function(enemyName) {
    //repeat and execute as long as the enemy-robot is alive
    while(playerHealth > 0 && enemyHealth > 0){
        // // Alert players that they are starting the round
        var promptFight = window.prompt ("Would you like FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
        // if player chooses to fight , then fight
        if (promptFight==="skip" || promptFight === "SKIP") {
            //confirm a player wants to skip
            var confirmSkip = window.confirm("Are you sure you would like to quit?");
            //if yes (true), leave fight
            if (confirmSkip) {
                window.alert(playerName + "has decided to skip this fight. Goodbye!");
                //subtract money from playerMoney for skipping
                playerMoney = playerMoney - 10;  
                console.log("playerMoney", playerMoney);
                break;
            }
        }

        enemyHealth = enemyHealth - playerAttack;
            console.log (
            playerName + "attacked" + enemyName + " . " + enemyName + "now has" + enemyHealth + "health remaining."
        );

        // check enemy's health
        if (enemyHealth <= 0) {
            window.alert (enemyName + "has died!");
            playerMoney = playerMoney + 20;
            break;
        }   else {
            window.alert (enemyName + "still has" + enemyHealth + "health left.");
        }

        //remove player's health by subtracting the amount set in the enemyAttack variable
        playerHealth = playerHealth - enemyAttack;
        console.log (
            enemyName + "attacked" + playerName +" . " + playerName + "now has " + playerHealth + "health remaining."
        );

        //check player's health
        if (playerHealth <= 0 ) {
            window.alert (playerName + "has died!");
            break;
        }   else {
            window.alert (playerName + "still has " + playerHealth + " health left.")
        }
    
    }
};       

for (var i=0; i < enemyName.length; i++){
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
    }
    var pickedEnemyName = enemyName[i];
    enemyHealth = 50;
    fight(pickedEnemyName);
    else {
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
}