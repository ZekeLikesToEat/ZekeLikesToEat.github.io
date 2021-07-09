// alert(JSON.stringify(devlog, undefined, 4));
console.log(devlog);
// document.body.style.backgroundColor = "green";

const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

window.addEventListener('resize', positionCanvas);
window.addEventListener('load', positionCanvas);

function positionCanvas() {
	canvas.style.position = 'fixed';
	canvas.style.top = 0;
	canvas.style.left = 0;
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
}

let lastTime;
window.requestAnimationFrame(function loop(t) {
	if (lastTime) {
		const dt = (t - lastTime) / 1000;
		update(dt);
	}

	lastTime = t;
	window.requestAnimationFrame(loop);
});

setInterval(() => {
	/* do stuff */
	console.log('this is the minute interval thing')
}, 60 * 1000)


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

// todo: break up update vs draw
function update(dt) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	updateAndDrawBouncingBall(dt);

	drawFrameRateIndicator(dt);

	document
		.getElementById("countup-browser-refresh")
		.innerText = Math.floor(lastTime / 1000);
}


function drawFrameRateIndicator(dt) {
	const formattedFrameRate = (1 / dt).toFixed(4);

	const fontSize = 20;
	ctx.fillStyle = 'gray';
	ctx.font = `${fontSize}px Arial`;
	ctx.fillText(formattedFrameRate, 0, fontSize);
}
