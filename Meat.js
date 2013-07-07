(function(M, ThrowableObject, Sprite) {

	function Meat(spriteName) {
		Sprite.call(this, spriteName);
	}

	M.extend(Meat, Sprite);
	M.extend(Meat, ThrowableObject);

	Game.Meat = Meat;

})(window.M, window.Game.ThrowableObject, window.M.renderers.Sprite);