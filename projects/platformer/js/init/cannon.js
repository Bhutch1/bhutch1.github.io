(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.collectable = window.opspark.collectable || {};
    let cannon = window.opspark.cannon;
    
    /**
     * init: Initialize all cannons.
     * 
     * Add as many cannons as necessary (at least 3) to make your level challenging. 
     *
     * The following functions are available to you:
     *  cannon.create.onTop(xLocation);
     *  cannon.create.onBottom(xLocation);
     *  cannon.create.onLeft(yLocation);
     *  cannon.create.onRight(yLocation);
     */ 
    cannon.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        // example:
        cannon.create.onBottom(450);
        cannon.create.onBottom(150);
        cannon.create.onBottom(750);
        cannon.create.onBottom(300);
        cannon.create.onBottom(600);
        cannon.create.onTop(225);
        cannon.create.onTop(375);
        cannon.create.onTop(525);
        cannon.create.onTop(675);
        cannon.create.onRight(600);
        cannon.create.onLeft(600);
        cannon.create.onRight(275);
        cannon.create.onLeft(275);
        cannon.create.onRight(375);
        cannon.create.onLeft(375);
        cannon.create.onRight(525);
        cannon.create.onLeft(525);
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);
