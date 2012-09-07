
var PLAYGROUND_WIDTH = 1000;
var PLAYGROUND_HEIGHT = 600;
var REFRESH_RATE = 15;

// Constants for the gameplay
var smallStarSpeed    	= 1 //pixels per frame
var mediumStarSpeed		= 3 //pixels per frame
var bigStarSpeed		= 4 //pixels per frame

var playerHit = false;

var playerPosition = 'right';
var playerCondition = new Array();
playerCondition['status'] = 'ground';
playerCondition['duration'] = 0;
playerCondition['speed'] = 5;