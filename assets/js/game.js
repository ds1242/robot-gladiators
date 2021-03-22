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
                playerMoney = playerMoney - 10;
                console.log("playerMoney", playerMoney);
                break;
            }
        }
        if (promptFight === 'fight' || promptFight === "FIGHT"){
        
            // subtract player attack from enemy health
            enemyHealth = enemyHealth - playerAttack;
            // Log resulting message to the console to know that it worked
            console.log(enemyName + " has " + enemyHealth + " health left");

            // Check enemy health
            if (enemyHealth <= 0) {
                window.alert(enemyName + " has died! Good Fight!");
                break;
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
    enemyHealth = 50;

    // debugger to check code here
    // debugger;

    // pass the pickedEnemyName variable's value into the fight function where it will assume the enemyName parameter
    fight(pickedEnemyName);
}
