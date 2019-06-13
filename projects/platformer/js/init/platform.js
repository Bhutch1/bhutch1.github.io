(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        platform.create(0, game.world.height - 32, 3, 2); //Level Floor
        platform.create(100, 0, 2.2, 0.25); //Roof
        platform.create(0, 0, 0.025, 50); //Left Border
        platform.create(890, 0, 0.025, 50); //Right Border
        

        // example:
        platform.create(0, 550, 1.2, 0.1); // Level 1 Left Tile
        platform.create(575, 550, 0.9, 0.1); // Level 1 Right Tile
        platform.create(50, 450, 0.4, 0.1); // Level 2 Left Tile
        platform.create(350, 450, 2.5, 0.1); // Level 2 Right Tile
        platform.create(0, 350, 2.1, 0.1); // Level 3 Left Tile
        platform.create(0, 250, 0.4, 0.1); //Level 4 Left Tile
        platform.create(250, 250, 1.7, 0.1); //Level 4 Right Tile
        platform.create(0, 150, 2, 0.1); //Level 5 Tile
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);