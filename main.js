function main() {

	var Rectangle = M.renderers.Rectangle,
		Sprite = M.renderers.Sprite;

	M.start();

	// M.setCanvasSize(window.screen.width, window.screen.height);
	
	M.sprites.onAllImagesLoaded.addEventListener(function() {
		startGame();
	});

	M.sprites.load({
		steak: "/assets/asado/steak.png"
	});

}

function startGame() {

	var background = new M.Layer(),
		gameLayer = new M.Layer();

	
	var meat = new Game.Meat();

	meat.setImage("steak");
	meat.setSize(84*2, 46*2);
	meat.setLocation(150, 170);
	
	gameLayer.push(meat);
	var meat = new Game.Meat();

	meat.setImage("steak");
	meat.setSize(84, 46);
	meat.setLocation(300, 185);
	
	gameLayer.push(meat);

	M.pushLayer(background);
	M.pushLayer(gameLayer);

}