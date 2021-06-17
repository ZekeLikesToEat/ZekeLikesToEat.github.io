alert(JSON.stringify(devlog,undefined,4));
console.log(devlog);
document.body.style.backgroundColor="green";
window.requestAnimationFrame(function loop(t) {
    //console.log(t);
    document.getElementById("countup-browser-refresh").innerText=Math.floor(t/1000);
    window.requestAnimationFrame(loop);
});
const canvas = document.getElementById('canvasTest');
canvas.style.width = window.innerWidth;
const ctx = canvas.getContext('2d');

const width = window.innerWidth;

ctx.fillStyle = 'blue';
ctx.fillRect(0, 0, width, 100); //pixels, border, border, width, height
//eventually create smart; have it find screen size and display full screen
