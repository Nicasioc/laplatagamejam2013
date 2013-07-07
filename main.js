function main() {

	M.start();
	
	M.sprites.onAllImagesLoaded.addEventListener(function() {
		startGame();
	});

	M.sprites.load({
		chorizo: "/assets/asado/chorizo.png",
		morcilla: "/assets/asado/morcilla.png",
		tira: "/assets/asado/tira.png",
		vacio: "/assets/asado/vacio.png"
	});

}

function startGame() {

	loadLevel(new Game.Level1());

}

function loadLevel(level) {

	M.removeScene();

	var background = new M.Layer(),
		gameLayer = new M.Layer();

	for ( var i = 0; i < level.data.length; i++ ) {
		var current = level.data[i],
			meat = new Game.Meat(current.path);
			meat.setLocation(parseInt(current.x), parseInt(current.y));
			meat.setRotation(parseInt(current.rotation));
			gameLayer.push(meat);
	}

	M.pushLayer(background);
	M.pushLayer(gameLayer);


}