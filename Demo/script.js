var canvas = document.getElementById("lightning");
var ctx = canvas.getContext('2d');

canvas.width = innerWidth;
canvas.height = innerHeight;

canvas.onclick = function () {
    new Lightning({
        ctx: ctx,
        start: { x: innerWidth / 2, y:  -100 },
        strength: 10,
        showFlash: true,
        minStrength: 0.5,
    });
}

fadeLightning(ctx, innerWidth, innerHeight);