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
	}

	Meat.prototype.onMouseDown = function() {
	};
	Meat.prototype.onDrag = function(mouse) {

		if ( !this.clickedX && !this.clickedY) {
			this.clickedX = mouse.x;
			this.clickedY = mouse.y;
		}
	
		// if ( this.speed.x < 6 && this.speed.y < 6 ) {
	
			// var aX = Math.abs(mouse.x - this._x + this.clickedX),
				// aY = Math.abs(mouse.y - this._y + this.clickedY);
			

			// var aX = 0, aY = 0;
			// var aX = 1, aY = 1;

			// this.speed.x = aX;
			// this.speed.y = aY;
			
			if ( this.speed.x < this.maxAX ) {
				// this.acceleration.x = aX;
				this.speed.x += 1;
			}
			if ( this.speed.y < this.maxAY ) {
				// this.acceleration.y = aY;
				this.speed.y += 1;
			}
			
			if ( !this.direction ) {
				this.direction = Math2d.getNormalized(Math2d.getVector2d(new Math2d.Vector2d(this._x, this._y), new Math2d.Vector2d(mouse.x, mouse.y)));
			}

		// }
		
	};
	Meat.prototype.onUpdate = function() {

		// this.speed.x += this.acceleration.x;
		// this.speed.y += this.acceleration.y;
		
		// var aX = this.acceleration.x - this.mass,
			// aY = this.acceleration.y - this.mass;
		
		// if ( aX > 0 ) {
			// this.acceleration.x = aX;
		// }
		// if ( aY > 0 ) {
			// this.acceleration.y = aY;
		// }
		
		if ( this.direction ) {		
			this.offset(this.direction.x * this.speed.x, this.direction.y * this.speed.y);		
		}
		
	};

	M.extend(Meat, Rectangle);

	Game.Meat = Meat;

})(window.M, window.M.renderers.Rectangle, window.Game, window.M.math2d);