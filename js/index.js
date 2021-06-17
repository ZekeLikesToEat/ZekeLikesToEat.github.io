alert('it works!');
console.log(devlog);
document.body.style.backgroundColor="green";
window.requestAnimationFrame(function loop(t) {
    //console.log(t);
    document.getElementById("countup-browser-refresh").innerText=Math.floor(t/1000);
    window.requestAnimationFrame(loop);
});
