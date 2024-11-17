// loaded
document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.arc(100, 100, 50, 0, Math.PI * 2, false);
    ctx.fillStyle = "#2f8016";
    ctx.fill();
    ctx.closePath();

});

var isTouch = false;

document.addEventListener("touchstart", function(e) {
    isTouch = true;
    touchTime = 0;
});

document.addEventListener("touchmove", function(e) {
    if (isTouch) {
        e.preventDefault();
        if (touchTime < 5) {
            touchTime++;
            return;
        }

        touchTime = 0;

        var touch = e.touches[0];
        var x = touch.pageX;
        var y = touch.pageY;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.arc(x, y, 50, 0, Math.PI * 2, false);
        ctx.fillStyle = "#2f8016";
        ctx.fill();
        ctx.closePath();
    }
});

document.addEventListener("touchend", function(e) {
    isTouch = false;
});