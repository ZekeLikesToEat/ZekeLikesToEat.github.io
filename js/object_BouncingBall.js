const bouncingSquare = {
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

function addObjectTo_objectPositionsList{
	objectPositionsList.push(bouncingSquare);
}

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

	if (s.position.x < 0) {
		s.velocity.x *= -1
	}

	if (s.position.y < 0) {
		s.velocity.y *= -1
	}

	// draw
	ctx.fillStyle = 'blue';
	ctx.fillRect(s.position.x, s.position.y, s.size, s.size);
}
