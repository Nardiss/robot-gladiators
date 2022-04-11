//window.alert("This is an alert! JavaScript is running!");
var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyName = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;


// You can also log mutiple values at once like this
//console.log(playerName, playerAttack, playerHealth);


console.log(enemyName);
console.log(enemyName.length);
console.log(enemyName[0]);
// console.log(enemyName[3]);

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

var startGame = function(){
   
    //reset player health
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for (var i=0; i < enemyName.length; i++){
        if (playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round" + (i + 1));
            var pickedEnemyName = enemyName[i];
            enemyHealth = 50;
            fight(pickedEnemyName);
            if (i < enemyName.length - 1){
                shop()
            }
        } 
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }
    }
    var endGame =  function(){
        window.alert ("The game has now ended. Let's see how you did!");
    };
    //if player is still alive, player wins!
    if (playerHealth > 0 && i < enemyName.length - 1) {
        //ask if player wants to use the store before the next round
        var storeConfirm = window.confirm ("The fight is over, vist the store before the next round?");
        //if yes take them to the store() function
        if (storeConfirm){
        shop();
        }
        window.alert("Great job, you've survived the game! You now have a score of " + playerMoney + ".");  
    }
    else {
        window.alert("You have lost your robot in battle.");
    }
    
    // ask player if they'd like to play again
    var playAgainConfirm = window.confirm ("Would you like to play again?");
    
    if (playAgainConfirm) {     
    }
    else {
        window.alert ("Thank you for playing Robot Gladiators! Come back soon!");
    }
    endGame();
    var shop = function (){
        //ask the player what they would like to do 
        var shopOptionPrompt = window.prompt (
            "Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice. "
        );

        //use switch to carry out action
        switch (shopOptionPrompt) {
            case "REFILL":
            case "refill":
                if (playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                //increase health and decrease  money
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney -7 ;
            }
            else {
                window.alert("You don't have enough monney!");
            }
            break;
            case "UPGRADE":
            case "upgrade":
                if (playerMoney >= 7) { 
                window.alert("Upgrading player's ayyack by 6 for 7 dollars.");

                //increase attack and decrease money
                playerAttack = playerAttack + 6;
                playerMoney =playerMoney - 7;
            }  
            else {
                window.alert("You don't have enough money!");
            }
            break;
            case "LEAVE":
            case "leave":
                window.alert ("Leaving the store.");

                //do nothing, so function will end 
                break;
            default:
                window.alert("You did not pick a valid option. Try again.");

                // call shop() again to force player to pick a valid option
                shop();
                break;
        
        }
        console.log("entered the shop");

    }


    //restart the game
    startGame();
     
};

