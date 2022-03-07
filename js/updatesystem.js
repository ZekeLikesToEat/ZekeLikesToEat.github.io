//limiting the access to only this script unless explicitly called upon
const UpdateSystem = (function () {
	const module = {};
 //place script here
  module.update = function(dt,ctx) {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		FrameRateSystem.drawFrameRateIndicator(dt,ctx);
	  	
	  	document
		.getElementById("countup-browser-refresh")
		.innerText = Math.floor(lastTime / 1000);
	}
  /*function update(dt) {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	FrameRateSystem.drawFrameRateIndicator(dt,ctx);

	document
		.getElementById("countup-browser-refresh")
		.innerText = Math.floor(lastTime / 1000);
}*/
  
  
  
  
  
	/*module.drawFrameRateIndicator = function(dt,ctx) {
		const formattedFrameRate = (1 / dt).toFixed(4);
		const fontSize = 20;
		ctx.fillStyle = 'gray';
		ctx.font = `${fontSize}px Arial`;
		ctx.fillText(formattedFrameRate, 0, fontSize);
	}*/
  
  
  
  
	// end script
	return module;
})()

//Class -->Objects-->functions (but you can have classes objects [they have no class.. shame])
