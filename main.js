function main() {

	var Rectangle = M.renderers.Rectangle,
		Sprite = M.renderers.Sprite;

	M.start();

	// M.setCanvasSize(window.screen.width, window.screen.height);
	
	// M.sprites.onAllImagesLoaded.addEventListener(function() {
		// runPlatforms();
	// });

	// M.sprites.load({
		// chrome: "http://puzzlingideas.com.ar/match/images/compatible_chrome.gif",
		// ff: "http://puzzlingideas.com.ar/match/images/compatible_firefox.gif",
		// s: "http://puzzlingideas.com.ar/match/images/compatible_safari.gif",
		// wp: "http://puzzlingideas.com.ar/match/images/compatible_windowsphone.png",
		// a: "http://puzzlingideas.com.ar/match/images/compatible_android.png",
		// ap: "http://puzzlingideas.com.ar/match/images/compatible_apple.png",
		// bb: "http://puzzlingideas.com.ar/match/images/compatible_blackberry.png",
	// });

	var background = new M.Layer(),
		gameLayer = new M.Layer();

	var wallLeft = new Rectangle(),
		wallRight = new Rectangle(),
		floor = new Rectangle();

	wallLeft.setSize(38, 150);
	wallLeft.setLocation(19, 268);

	wallRight.setSize(38, 150);
	wallRight.setLocation(506, 268);

	floor.setSize(452, 20);
	floor.setLocation(262, 289);
	floor.setFillStyle("orange");

	background.push(wallLeft);
	background.push(wallRight);	
	background.push(floor);

	var meat = new Game.ThrowableObject();

	meat.setSize(60, 20);
	meat.setLocation(70, 270);
	
	gameLayer.push(meat);

	M.pushLayer(background);
	M.pushLayer(gameLayer);

}