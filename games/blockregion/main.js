// loaded
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.rect(50, 100, 200, 200);
    //ctx.arc(canvas.width/ 1.5, canvas.height / 2, 75, 0, Math.PI*2);
    ctx.fillStyle = "#ba3500";
    ctx.fill();
    // ctx.stroke();
    ctx.closePath();
});


// clicked
document.addEventListener("click", function(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.rect(50+5, 100+5, 190, 190);
    //ctx.arc(canvas.width/ 1.5, canvas.height / 2, 75, 0, Math.PI*2);
    ctx.fillStyle = "#ba3500";
    ctx.fill();
});
