// Create a random number with this function
var randomNumber = function(max, min){
    var value = Math.floor(Math.random() + (max - min + 1)) + min;
    return value;
}

var fightOrSkip = function(){
    // ask player if they'd like to fight or skip using fightOrSkip function
  var promptFight = window.prompt('Would you like FIGHT or SKIP this battle? Enter "FIGHT" or "SKIP" to choose.');
  

  // Conditional Recursive Function Call
if (!promptFight) {
    window.alert("You need to provide a valid answer! Please try again.");
    return fightOrSkip();
  }
  //lower case to reduce number of items to check
  promptFight = promptFight.toLocaleLowerCase();
  // if player picks "skip" confirm and then stop the loop
  if (promptFight === "skip") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    // if yes (true), leave fight
    if (confirmSkip) {
      window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
      // subtract money from playerMoney for skipping
      playerInfo.playerMoney = playerInfo.money - 10;
      return true;
    }
  }
  return false;
};


var fight = function(enemy) {
    
    while(enemy.health > 0 && playerInfo.health > 0){
        fightOrSkip();
        
        // console.log(promptFight);
       
            // subtract player attack from enemy health
            var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);
            enemy.health = Math.max(0, enemy.health - damage);
            // Log resulting message to the console to know that it worked
            console.log(enemy.name + " has " + enemy.health + " health left");

            // Check enemy health
            if (enemy.health <= 0) {
                window.alert(enemy.name + " has died! Good Fight!");

                // award money for winning the fight
                playerInfo.money = playerInfo.money + 20;
                break;
            }
            else {
                window.alert(enemy.name + " still has " + enemy.health + " health left.");
            }

            // subtract playerInfo.health from enemy.attack value
            var damage = randomNumber(enemy.attack - 3, enemy.attack);

            playerInfo.health = Math.max(0, playerInfo.health - damage);
            // Log resulting message to the console to know that it worked
            console.log(playerInfo.name + " has " + playerInfo.health + " health left");

            // check player health
            if (playerInfo.health <= 0){
                window.alert(playerInfo.name + " has died!");
                break;
            }
            else {
                window.alert(playerInfo.name + " has " + playerInfo.health + " health left.");
            }
        
        // else {
        //     window.alert("You must choose a valid option. Please try again!");
        // }
    }
} ;



var startGame = function() {
    // reset player stats
    playerInfo.reset();
    for(var i = 0; i < enemyInfo.length; i++) {
        // let's player know what round they are in
        if(playerInfo.health > 0){
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1) );
        }
        else {
            window.alert("You have lost your robot in battle! Game Over!");
            break;
        }

        var pickedEnemyObj = enemyInfo[i];
        // reset enemy health  here
       pickedEnemyObj.health = randomNumber(40, 60);
       console.log(pickedEnemyObj);

        // debugger to check code here
        // debugger;

        // pass the pickedEnemyName variable's value into the fight function where it will assume the enemy.name parameter
        fight(pickedEnemyObj);

        // if we are not one the last enemy, enter shop
        if(playerInfo.health > 0 && i < enemyInfo.length - 1){
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
    if(playerInfo.health > 0){
        window.alert("Great Job! You  have survived the game.  You now have a score of " + playerInfo.money + ".");
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
    var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 1 for REFILL, 2 for UPGRADE, or 3 to LEAVE.");
    shopOptionPrompt = parseInt(shopOptionPrompt);
    switch(shopOptionPrompt){
        case 1: 
            //refill player's health
            playerInfo.refillHealth();
            break;
        case 2:
            playerInfo.upgradeAttack();
            break;
        case 3:
            window.alert("Leaving the store");
            break;
        default:
            window.alert("You did not pick a valid option. Try again.");
            // call shop() again to force player to pick a valid option
            shop();
            break;
    }
};
var getPlayerName = function() {
    var name = "";
    while (name === "" || name === null){
        name = prompt("What is your robot's name?");        
    }
    console.log("Your robot's name is " + name);
    return name;
};

var randomNumber = function(max, min){
    var value = Math.floor(Math.random() + (max - min + 1)) + min;

    return value;
}

var playerInfo = {
    name: getPlayerName(),
            // checks for a valid input on the playerName
    health: 100,
    attack: 10,
    money:10,
    reset:function(){
        this.health = 100;
        this.money = 10;
        this.attack = 10;
    },
    refillHealth: function() {
        if(this.money >= 7){
            window.alert("Refilling player's health by 20 for 7 dollars.");
            this.health += 20;
            this.money -= 7
        } else {
            window.alert("You don't have enough money!");
        }
    },
    upgradeAttack: function() {
        if(this.money >= 7){
            window.alert("Upgrading attack by 6 for 7 dollars");
            this.attack += 6;
            this.money -= 7;
        } else {
            window.alert("You don't have enough money!");
        }
    }
};



var enemyInfo = [
    {
        name:"Roberto",
        attack: randomNumber(10,14)
    },
    {
        name:"Amy Android",
        attack: randomNumber(10,14)
    },
    {
        name:"Robo Truble",
        attack:randomNumber(10,14)
    }
];

startGame();