(function(M, ThrowableObject) {

	function Fly() {
		ThrowableObject.call(this);
	}

	M.extend(Fly, ThrowableObject);

	Game.Fly = Fly;

})(window.M, window.Game.ThrowableObject);