(function(M, Rectangle, Game, Math2d) {

	function Meat() {
		Rectangle.call(this);
		this.setFillStyle("red");
		this.speed = new Object();
		this.acceleration = new Object();
		this.speed.x = 0;
		this.speed.y = 0;
		this.acceleration.x = 0;
		this.acceleration.y = 0;
		this.mass = 1;
		this.maxAX = 5;
		this.maxAY = 5;
		this.clickedX = 0;
		this.clickedY = 0;
	}

	Meat.prototype.onMouseDown = function() {
	};
	Meat.prototype.onMouseUp = function() {
		this.clickedX = null;
		this.clickedY = null;
		this.speed.x = -1;
		this.speed.y = -1;
	};
	Meat.prototype.onDrag = function(mouse) {

		if ( !this.clickedX && !this.clickedY) {
			this.clickedX = mouse.x;
			this.clickedY = mouse.y;
		}

		this.setLocation(mouse.x + (this._x - this.clickedX), mouse.y + (this._y - this.clickedY));

		this.direction = Math2d.getNormalized(Math2d.getVector2d(new Math2d.Vector2d(this._x, this._y), new Math2d.Vector2d(mouse.x, mouse.y)));

	};
	Meat.prototype.onUpdate = function() {

		if ( this.speed.x && this.speed.y ) {		
			this.offset(this.direction.x * this.speed.x, this.direction.y * this.speed.y);		
		}
		
	};

	M.extend(Meat, Rectangle);

	Game.Meat = Meat;

})(window.M, window.M.renderers.Rectangle, window.Game, window.M.math2d);