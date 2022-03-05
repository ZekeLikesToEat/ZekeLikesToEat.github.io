//limiting the access to only this script unless explicitly called upon
const FrameRateSystem = (function () {
	const module = {};
 //place script here
	module.drawFrameRateIndicator = function(dt,ctx) {
		const formattedFrameRate = (1 / dt).toFixed(4);
		const fontSize = 20;
		ctx.fillStyle = 'gray';
		ctx.font = `${fontSize}px Arial`;
		ctx.fillText(formattedFrameRate, 0, fontSize);
	}
	// end script
	return module;
})()

//Class -->Objects-->functions (but you can have classes objects [they have no class.. shame])
