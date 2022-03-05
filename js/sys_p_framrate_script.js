//limiting the access to only this script unless explicitly called upon
const sys_P_FrameRate - (function () {
 //place script here
function drawFrameRateIndicator(dt) {
	const formattedFrameRate = (1 / dt).toFixed(4);
	const fontSize = 20;
	ctx.fillStyle = 'gray';
	ctx.font = `${fontSize}px Arial`;
	ctx.fillText(formattedFrameRate, 0, fontSize);

} // end script
