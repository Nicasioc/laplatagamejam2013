(function(M, Rectangle, Game, Math2d) {

	function ThrowableObject() {
		Rectangle.call(this);
		this.setFillStyle("red");
	}

	ThrowableObject.prototype.onMouseDown = function(mouse) {
		if ( !this.clickedX && !this.clickedY) {
			this.clickedX = mouse.x;
			this.clickedY = mouse.y;
		}
	};
	ThrowableObject.prototype.onMouseUp = function(mouse) {
		this.releaseX = mouse.x;
		this.releaseY = mouse.y;
		this.direction = Math2d.getVector2d(new Math2d.Vector2d(this.clickedX, this.clickedY), new Math2d.Vector2d(this.releaseX, this.releaseY));
		this.rotationSpeed = 0.25;
	};
	ThrowableObject.prototype.onUpdate = function() {

		if ( this.direction ) {
			this.offsetRotation(this.rotationSpeed);
			this.offset(this.direction.x/20, this.direction.y/20);		
		}
		
	};

	M.extend(ThrowableObject, Rectangle);

	Game.ThrowableObject = ThrowableObject;

})(window.M, window.M.renderers.Rectangle, window.Game, window.M.math2d);