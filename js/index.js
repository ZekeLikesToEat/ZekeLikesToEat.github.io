//New Code 2022.03.04
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
	// do stuff 
	
}, 60 * 1000/120)//changed to every 1/2 seconds
function update(dt) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawFrameRateIndicator(dt);

	document
		.getElementById("countup-browser-refresh")
		.innerText = Math.floor(lastTime / 1000);
}
/* Move this to separate script
function drawFrameRateIndicator(dt) {
	const formattedFrameRate = (1 / dt).toFixed(4);

	const fontSize = 20;
	ctx.fillStyle = 'gray';
	ctx.font = `${fontSize}px Arial`;
	ctx.fillText(formattedFrameRate, 0, fontSize);
}*/



/*
//Old Code  2022.03.04

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
	//do stuff 
	//console.log('this is the minute interval thing')
	addObjectTo_objectPositionsList();
	addObjectTo_objectPositionsList2();//delete after testing
	
	declareObjectPositions();

}, 60 * 1000/120)//changed to every 1/2 seconds

// todo: break up update vs draw
function update(dt) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	updateAndDrawBouncingBall(dt);
	updateAndDrawBouncingBall2(dt);//delete after testing

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
}*/
