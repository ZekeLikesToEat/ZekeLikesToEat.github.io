alert(JSON.stringify(devlog,undefined,4));
console.log(devlog);
document.body.style.backgroundColor="green";
window.requestAnimationFrame(function loop(t) {
    //console.log(t);
    document.getElementById("countup-browser-refresh").innerText=Math.floor(t/1000);
    window.requestAnimationFrame(loop);
});
const canvas = document.getElementById('canvasTest');
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'green';
ctx.fillRect(10, 10, 150, 100);
