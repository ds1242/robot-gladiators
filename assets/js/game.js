var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// logging multiple values all at once like below:


var enemyNames = ["Roborto", "Amy Android", "Robo Truble"];
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function(enemyName) {
    // alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP; to choose.");
    console.log(promptFight);

    if (promptFight === 'fight' || promptFight === "FIGHT"){
        // subtract player attack from enemy health
        enemyHealth = enemyHealth - playerAttack;
        // Log resulting message to the console to know that it worked
        console.log(enemyNames + " has " + enemyHealth + " health left");

        // Check enemy health
        if (enemyHealth <= 0) {
            window.alert(enemyNames + " has died! Good Fight!");
        }
        else {
            window.alert(enemyNames + " still has " + enemyHealth + " health left.");
        }

        // subtract playerHealth from enemyAttack value
        playerHealth = playerHealth - enemyAttack;
        // Log resulting message to the console to know that it worked
        console.log(playerName + " has " + playerHealth + " health left");

        // check player health
        if (playerHealth <= 0){
            window.alert(playerName + " has died! Game Over!");
        }
        else {
            window.alert(playerName + " has " + playerHealth + " health left.");
        }
    } else if (promptFight.toLowerCase() === "skip"){
        // confirm if player wants to skip the fight
        var confirmSkip = window.confirm("Are you sure you'd like to skip this battle?");

        // if yes (true), then leave the fight
        if (confirmSkip) {
            window.alert(playerName + " has chosen to skip the fight.");
            // subtract money for skipping fight
            playerMoney = playerMoney - 2;
        }
        else {
            fight();
        }
        
    } else {
        window.alert("You must choose a valid option. Please try again!");
    }
} ;

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
