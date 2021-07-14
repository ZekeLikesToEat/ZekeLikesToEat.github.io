const bouncingSquare = {
	objectName: "blueball",
	size: 50,
	position: {
		x: 100,
		y: 100,
	},
	velocity: { // pixels per second
		x: 300,
		y: -200,
	},
	
};
function resetBallPosition() {
	bouncingSquare.position.x = 100;
	bouncingSquare.position.y = 100;
};

function addObjectTo_objectPositionsList(){
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
	ctx.arc(s.position.x, s.position.y, s.size, 0, 1*Math.PI,false);
	ctx.fill();
	ctx.lineWidth = 5;
	ctx.strokeStyle = '#003300';
	ctx.stroke();
	
	
	/*Rectangle [SQUARE]
	ctx.fillRect(s.position.x, s.position.y, s.size, s.size);
	*/

}
