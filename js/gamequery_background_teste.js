

$(function(){

	// sets the div to use to display the game and its dimension
	$("#playground").playground({ width: PLAYGROUND_WIDTH , height: PLAYGROUND_HEIGHT , keyTracker: true })
		.addGroup( "background", { width:PLAYGROUND_WIDTH, height:PLAYGROUND_HEIGHT }).end()
		.addGroup( "actors", { width:PLAYGROUND_WIDTH, height:PLAYGROUND_HEIGHT });

	//set sprites
		var background1 = new $.gameQuery.Animation( { imageURL:"imagens/fundoAzul.jpg" } );
		var background2 = new $.gameQuery.Animation( { imageURL:"imagens/morro.png" } );
		var background3 = new $.gameQuery.Animation( { imageURL:"imagens/nuvemGrande.png" } );
		var background4 = new $.gameQuery.Animation( { imageURL:"imagens/nuvensPassageiras.png" } );
		var background5 = new $.gameQuery.Animation( { imageURL:"imagens/chao.jpg" } );
	$("#background")
		.addSprite("background1",{ animation:background1 , width:PLAYGROUND_WIDTH , height:PLAYGROUND_HEIGHT } )
		.addSprite("background2",{ animation:background2 , width:171 , height:85 , posx:100 , posy:PLAYGROUND_HEIGHT-126 } )
		.addSprite("background3",{ animation:background3 , width:PLAYGROUND_WIDTH , height:PLAYGROUND_HEIGHT , posx:PLAYGROUND_WIDTH } )
		.addSprite("background4",{ animation:background4 , width:PLAYGROUND_WIDTH , height:PLAYGROUND_HEIGHT } )
		.addSprite("background5",{ animation:background5 , width:PLAYGROUND_WIDTH , height:41 , posy:PLAYGROUND_HEIGHT-41} );

	$.playground().registerCallback(function(){

        //Offset all the pane:
        var newPos = (parseInt($("#background3").css("left")) - smallStarSpeed - PLAYGROUND_WIDTH) 
        	% (-2 * PLAYGROUND_WIDTH) + PLAYGROUND_WIDTH;
        $("#background3").css("left", newPos);

        newPos = (parseInt($("#background4").css("left")) - smallStarSpeed - PLAYGROUND_WIDTH)
        	% (-2 * PLAYGROUND_WIDTH) + PLAYGROUND_WIDTH;
    	$("#background4").css("left", newPos);


    }, REFRESH_RATE);


    actors();


	// configure the loading bar
	$.loadCallback(function(percent){
		$("#loadBar").width(400*percent);
		$("#loadtext").html(""+percent+"%")
	});

	// register the start button and remove the splash screen once the game is ready to starts
	$("#start").click(function(){
		$.playground().startGame(function(){
			 $("#splash").remove();
		});
	});

});