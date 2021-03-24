var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// logging multiple values all at once like below:


var enemyNames = ["Roborto", "Amy Android", "Robo Truble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    
    while(enemyHealth > 0 && playerHealth > 0){
    
        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP; to choose.");
        console.log(promptFight);

        if (promptFight.toLowerCase() === "skip"){
            // confirm if player wants to skip the fight
            var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

            // if yes (true), then leave the fight
            if (confirmSkip) {
                window.alert(playerName + " has chosen to skip the fight.");
                // subtract money for skipping fight
                playerMoney = Math.max(0, playerMoney - 10);
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        if (promptFight === 'fight' || promptFight === "FIGHT"){
        
            // subtract player attack from enemy health
            var damage = randomNumber(playerAttack - 3, playerAttack);
            enemyHealth = Math.max(0, enemyHealth - damage);
            // Log resulting message to the console to know that it worked
            console.log(enemyName + " has " + enemyHealth + " health left");

            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died! Good Fight!");

                // award money for winning the fight
                playerMoney = playerMoney + 20;
                break;
            }
            else {
                window.alert(enemyName + " still has " + enemyHealth + " health left.");
            }

            // subtract playerHealth from enemyAttack value
            var damage = randomNumber(enemyAttack - 3, enemyAttack);

            playerHealth = Math.max(0, playerHealth - damage);
            // Log resulting message to the console to know that it worked
            console.log(playerName + " has " + playerHealth + " health left");

            // check player health
            if (playerHealth <= 0){
                window.alert(playerName + " has died!");
                break;
            }
            else {
                window.alert(playerName + " has " + playerHealth + " health left.");
            }
        
        }else {
            window.alert("You must choose a valid option. Please try again!");
        }
    }
} ;



var startGame = function() {
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    for(var i = 0; i < enemyNames.length; i++) {
        // let's player know what round they are in
        if(playerHealth > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

        var pickedEnemyName = enemyNames[i];
        // reset enemy health  here
        enemyHealth = randomNumber(40, 60);

        // debugger to check code here
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function where it will assume the enemyName parameter
        fight(pickedEnemyName);

        // if we are not one the last enemy, enter shop
        if(playerHealth > 0 && i < enemyNames.length - 1){
            // ask the player if they would like to enter the shop
            var storeConfirm = window.confirm("The fight is over, would you like to enter the shop?");
            if(storeConfirm){
                shop();
            };
        }
    }   
    endGame();
    
};

var endGame = function(){
    if(playerHealth > 0){
        window.alert("Great Job! You  have survived the game.  You now have a score of " + playerMoney + ".");
    } else {
        window.alert("You lost your robot in battle");
    }
    // ask if they want to play again 
    var playAgainConfirm = confirm("Would you like to play again?");
    if(playAgainConfirm){
        // start again if they do want to play again 
        startGame();
    } else {
        // end the game if they do not.
        window.alert("Thanks for playing. Come again soon!");
    }
};

var shop = function(){
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice");
    switch(shopOptionPrompt){
        case "REFILL":
        case "refill": 
            //refill player's health
            if(playerMoney >= 7){
                window.alert("Refilling player's health by 20 for 7 dollars.");
                playerHealth = playerHealth + 20;
                playerMoney = playerMoney - 7;
                
            } else {
                window.alert("You don't have enough money");
            }
            break;
        case "UPGRADE":
        case "upgrade":
            if(playerMoney >= 7){
                window.alert("Upgrading player's attack by 6 for 7 dollars");
                playerAttack = playerAttack + 6;
                playerMoney = playerMoney - 7;
            } else {
                window.alert("You don't have enough money");
            }
            break;
        case "LEAVE":
        case "leave":
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};

var randomNumber = function(max, min){
    var value = Math.floor(Math.random() + (max - min + 1)) + min;

    return value;
}
startGame();