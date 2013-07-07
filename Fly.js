(function(M, ThrowableObject, Sprite) {

	function Fly() {
		Sprite.call(this);
	}

	M.extend(Fly, Sprite);
	M.extend(Fly, ThrowableObject);

	Game.Fly = Fly;

})(window.M, window.Game.ThrowableObject, window.M.renderers.Sprite);