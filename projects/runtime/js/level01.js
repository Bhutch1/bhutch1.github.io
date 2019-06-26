var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;
        function createSawBlade(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 25;
            var myObstacle = game.createObstacle(hitZoneSize,damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);    
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        function createHeathen(x, y) {
            var hitZoneSize = 25
            var damageFromObstacle = 100000;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle)
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle)
            var obstacleImage = draw.bitmap('img/sawblade.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -25;
            obstacleImage.y = -25;
        }
        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'sawblade',x:300,y:375},
                {type: 'sawblade',x:600,y:250},
                {type: 'sawblade',x:900,y:375},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:1200,y: 250},
                {type: 'sawblade',x:2000,y: 250},
                
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);
        function createEnemy(x,y) {
            var enemy =  game.createGameItem('enemy',25);
            var redSquare = draw.rect(50,50,'red');
            redSquare.x = -25;
            redSquare.y = -25;
            enemy.addChild(redSquare);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            var enemyImage = draw.bitmap('img/bling_bling_sans.jpg');
            enemy.velocityX = -1;
            enemy.rotationVelocity = 10;
            enemy.onPlayerCollision  = function() {
                game.changeIntegrity(-10000);
                console.log("hit");
                
            };
            enemy.onProjectileCollision = function () {
               game.increaseScore(100);
               enemy.flyTo(0, groundY);
               enemy.flyTo(900, groundY + 100);
               enemy.flyTo(450, 450);
               enemy.flyTo(450, -200);
               enemy.fadeOut();
            };
        }
        // BEG  `IN EDITING YOUR CODE HERE
        for (var i = 0; i < levelData.gameItems.length; i++) {
            if (levelData.gameItems[i].type === 'sawblade') {
                createSawBlade(levelData.gameItems[i].x, levelData.gameItems[i].y);
            }
        }
        createHeathen(300, 315);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        createEnemy(300, groundY - 50);
        
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}