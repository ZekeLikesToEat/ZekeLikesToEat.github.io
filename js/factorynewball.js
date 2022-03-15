//Creating factory to create object "Bouncing Balls"

//limiting the access to only this script unless explicitly called upon
const FactoryNewBall - (function () {
 //place entire script here:
	
	module.addBall = function()
	{
	
		class BouncingBallClass {
    			constructor (name, size, position_x, position_y, velocity_x, velocity_y) {
	    //use commas or semi colons???
     			this.name = name;
     			this.size = size;
     			this.position_x = position_x;
     			this.position_y = position_y;
			this.velocity_x = velocity_x;
     		 	this.velocity_y = velocity_y;	    
   			 }
  		}
  
  		function resetBallPosition() {
			bouncingSquare.position.x = 100;
			bouncingSquare.position.y = 100;
 		 };

  		function addObjectTo_objectPositionsList() {
			objectPositionsList.push(bouncingSquare);
 		 };
  
 		 var dt = 0;
 		 function updateAndDrawBouncingBall(dt) {
			const s = bouncingSquare;

			// gravity
			s.velocity.y += 300 * dt

			// update position from velocity
			s.position.x += s.velocity.x * dt;
			s.position.y += s.velocity.y * dt;

			// bounce
			if ((s.position.x + s.size) > canvas.width) {
				s.velocity.x *= -1
			}

			if ((s.position.y + s.size) > canvas.height) {
				s.velocity.y *= -1
			}

			if ((s.position.x - s.size) < 0) {
				s.velocity.x *= -1
			}

			if ((s.position.y - s.size) < 0) {
				s.velocity.y *= -1
			}
	
			//added reset position
			if (
			    ((s.position.x) > canvas.width) ||
			    ((s.position.y) > canvas.height) ||
			    ((s.position.x) < 0) ||
			    ((s.position.x) < 0))
			{
				resetBallPosition();
			}

			// draw
			ctx.fillStyle = 'blue';
			
			//Attempting to make circle
			ctx.beginPath();
			ctx.arc(s.position.x, s.position.y, s.size, 0, 2*Math.PI,false);
			ctx.fill();
			ctx.lineWidth = 5;
			ctx.strokeStyle = '#003300';
			ctx.stroke(); 

    		return {
          //place items to be accessed by other scripts here:
     		 BouncingBallClass();
     		 updateAndDrawBouncingBall();
 
    		};
		return module;
	}
})();




/*
const bouncingSquare = {
	objectName: "blueball",
	size: 25,
	position: {
		x: 100,
		y: 100,
	},
	velocity: { // pixels per second
		x: 300,
		y: -200,
	},
	
};*/




}
