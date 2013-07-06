(function(M, ThrowableObject, Sprite) {

	function Fly() {
		Sprite.call(this);
	}

	M.extend(Fly, ThrowableObject);
	M.extend(Fly, Sprite);

	Game.Fly = Fly;

})(window.M, window.Game.ThrowableObject, window.M.Sprite);