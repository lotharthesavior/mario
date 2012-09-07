

function Player(){

	this.playerAnimation = setUpMarioAnimation(); // monta movimentos do mario

	// atributos do personagem
	this.hp = 1;

	this.damage = function () {
		// do damage
	}

}

function setUpMarioAnimation()
{

	var playerAnimation = new Array();

	playerAnimation["idle"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario.png"
	});
	playerAnimation["idle_back"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_invert.png"
	});
	playerAnimation["walk"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_walk.png" ,
		numberOfFrame: 3 ,
		delta: 18 ,
		rate: 60 ,
		type: $.gameQuery.ANIMATION_HORIZONTAL
	});
	playerAnimation["up"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_up.png"
	});
	playerAnimation["up_left"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_up_left.png"
	});
	playerAnimation["jump"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_jump.png"
	});
	playerAnimation["jump_left"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_jump_left.png"
	});
	playerAnimation["down"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_down.png"
	});
	playerAnimation["down_left"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_down_left.png"
	});
	playerAnimation["back"] = new $.gameQuery.Animation({ 
		imageURL:"imagens/mario_walk_invert.png" ,
		numberOfFrame: 3 ,
		delta: 18 ,
		rate: 60 ,
		type: $.gameQuery.ANIMATION_HORIZONTAL
	});

	return playerAnimation;

}