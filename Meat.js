(function(M, ThrowableObject, Sprite) {

	function Meat(spriteName) {
		Sprite.call(this, spriteName);
	}

	M.extend(Meat, ThrowableObject);
	M.extend(Meat, Sprite);

	Game.Meat = Meat;

})(window.M, window.Game.ThrowableObject, window.M.renderers.Sprite);