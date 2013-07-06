(function(M, ThrowableObject, Sprite) {

	function Meat() {
		Sprite.call(this);
	}

	M.extend(Meat, ThrowableObject);
	M.extend(Meat, Sprite);

	Game.Meat = Meat;

})(window.M, window.Game.ThrowableObject, window.M.renderers.Sprite);