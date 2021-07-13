
/*READ!! -- YES, BitbenderAlpha, 
I know this makes your eye twitch.
 will eventually create a class and 
 object generator instead of having 
 two duplicate scripts. 
 Patience oh magnificent coder.
*/
const bouncingSquare2 = {
	objectName: "redball",
	size: 50,
	position: {
		x: 200,
		y: 50,
	},
	velocity: { // pixels per second
		x: 350,
		y: -250,
	},
	
};

function addObjectTo_objectPositionsList2(){
	objectPositionsList.push(bouncingSquare2);
};

var dt = 0;

function updateAndDrawBouncingBall2(dt) {
	const s2 = bouncingSquare2;

	// gravity
	s2.velocity.y += 300 * dt

	// update position from velocity
	s2.position.x += s2.velocity.x * dt;
	s2.position.y += s2.velocity.y * dt;

	// bounce
	if ((s2.position.x + s2.size) > canvas.width) {
		s2.velocity.x *= -1
	}

	if ((s2.position.y + s2.size) > canvas.height) {
		s2.velocity.y *= -1
	}

	if (s2.position.x < 0) {
		s2.velocity.x *= -1
	}

	if (s2.position.y < 0) {
		s2.velocity.y *= -1
	}

	// draw
	ctx.fillStyle = 'red';
	ctx.fillRect(s2.position.x, s2.position.y, s2.size, s2.size);
	//addObjectTo_objectPositionsList();
}
