
var player = new Player();

function actors(){

	$.playground()
		.addGroup( "actors" , {
			width: PLAYGROUND_WIDTH ,
			height: PLAYGROUND_HEIGHT
		})
			.addGroup( "player" , {
				posx: PLAYGROUND_WIDTH/2,
				posy: PLAYGROUND_HEIGHT-68,
				width: 16,
				height: 27
			})
				.addSprite( "playerBody" , {
					animation: player.playerAnimation["idle"],
					posy: 0,
					posx: 0,
					width: 16,
					height: 27,
				});

	$.playground().registerCallback(function(){

		// if(!gameOver){
	    	//update the movement
	    	if(!playerHit){
	    		
	    		//console.log($("#player")[0]);
	    		if(jQuery.gameQuery.keyTracker[65]){ // left
	    			var nextpos = parseInt($("#player").css("left"))-playerCondition['speed'];
	    			if(nextpos > 0){
	    				$("#player").css("left",""+nextpos+"px")
	    			}
	    		}

	    		if(jQuery.gameQuery.keyTracker[68]){ // right
	    			var nextpos = parseInt($("#player").css("left"))+playerCondition['speed'];
	    			if(nextpos < PLAYGROUND_WIDTH - 16){
	    				$("#player").css("left",""+nextpos+"px")
	    			}
	    		}

				/* dont move to downward except when on water
	    		if(jQuery.gameQuery.keyTracker[87]){ // up
	    			var nextpos = parseInt($("#player").css("top"))-5;
	    			if(nextpos > 0){
	    				$("#player").css("top",""+nextpos+"px")
	    			}
	    		}
				// dont move up except on water
	    		if(jQuery.gameQuery.keyTracker[83]){ // down
	    			var nextpos = parseInt($("#player").css("top"))+5;
	    			if(nextpos < PLAYGROUND_HEIGHT - 24){
	    				$("#player").css("top",""+nextpos+"px")
	    			}
	    		}
				*/
	    	}

	    	if( playerCondition['status'] == 'jumping' ){ jumping_move(); }
		// }

	}, REFRESH_RATE);
	

}

$(document).keydown( function(e){

	switch( e.keyCode ){
		case 68: // right
			if( playerCondition['status'] == 'ground' ){
				$("#playerBody").setAnimation( player.playerAnimation['walk'] );
			}
			playerPosition = 'right';
			break;
		case 87: // up
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['up'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['up_left'] );
				}
			}
			break;
		case 83: // down
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['down'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['down_left'] );
				}
			}
			break;
		case 65: // back
			if( playerCondition['status'] == 'ground' ){
				$("#playerBody").setAnimation( player.playerAnimation['back'] );
			}
			playerPosition = 'left';
			break;
		case 72: // jump
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['jump'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['jump_left'] );
				}

				playerCondition['status'] = 'jumping';
				playerCondition['duration'] = 3;
			}
			break;
		case 89: // run
			playerCondition['speed'] = 10;
			break;
	}

});

$(document).keyup( function(e){

	switch( e.keyCode ){
		case 68: // right
			if( playerCondition['status'] == 'ground' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle'] );
			}
			break;
		case 87: // up
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['idle'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['idle_back'] );
				}
			}
			break;
		case 83: // down
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['idle'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['idle_back'] );
				}
			}
			break;
		case 65: // back
			if( playerCondition['status'] == 'ground' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle_back'] );
			}
			break;
		case 72: // jump
			if( playerCondition['status'] == 'ground' ){
				if( playerPosition == 'right' ){
					$("#playerBody").setAnimation( player.playerAnimation['jump'] );
				}else if( playerPosition == 'left' ){
					$("#playerBody").setAnimation( player.playerAnimation['jump_left'] );
				}
			}
			break;
		case 89: // run
			playerCondition['speed'] = 5;
			break;
	}

});

function jumping_move(){

	playerCondition['duration'] = playerCondition['duration'] - 0.1;

	if( playerCondition['duration'] > 2 ){ // subindo com velocidade

		var nextpos = parseInt($("#player").css("top"))-10;
		if(nextpos > 0){
			$("#player").css("top",""+nextpos+"px")
		}

	}else if( playerCondition['duration'] < 2.1 &&  playerCondition['duration'] > 1.6 ){ // subindo devagar

		var nextpos = parseInt($("#player").css("top"))-5;
		if(nextpos > 0){
			$("#player").css("top",""+nextpos+"px")
		}

	}else if( playerCondition['duration'] < 1.7 && playerCondition['duration'] > 1.3 ){ // parado no topo

	}else if( playerCondition['duration'] < 1.4 && playerCondition['duration'] > 0.9 ){ // descendo devagar

		var nextpos = parseInt($("#player").css("top"))+5;
		if(nextpos < PLAYGROUND_HEIGHT-64){
			$("#player").css("top",""+nextpos+"px");
		}else{
			playerCondition['status'] = 'ground';
			if( playerPosition == 'right' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle'] );
			}else if( playerPosition == 'left' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle_back'] );
			}
		}

	}else if( playerCondition['duration'] < 1 ){ // descendo com velocidade

		var nextpos = parseInt($("#player").css("top"))+10;
		if(nextpos < PLAYGROUND_HEIGHT-64){
			$("#player").css("top",""+nextpos+"px");
		}else{
			playerCondition['status'] = 'ground';
			if( playerPosition == 'right' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle'] );
			}else if( playerPosition == 'left' ){
				$("#playerBody").setAnimation( player.playerAnimation['idle_back'] );
			}
		}

	}
}