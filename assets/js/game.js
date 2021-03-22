var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

// logging multiple values all at once like below:
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    // alert player that they are starting the round
    window.alert("Welcome to Robot Gladiators!");
    // subtract player attack from enemy health
    enemyHealth = enemyHealth - playerAttack;
    // Log resulting message to the console to know that it worked
    console.log(enemyName + " has " + enemyHealth + " health left");

    // Check enemy health
    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died! Good Fight!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
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
} ;

fight();
