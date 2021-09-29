var bw = 1000;
var bh = 600;
var p = 0;
var cw = bw + (p * 2) + 1;
var ch = bh + (p * 2) + 1;

var DrawUtil = {
    drawGrids: (canvas) => {
        var context = canvas.getContext("2d");
        const ctx = canvas.getContext('2d');
        ctx.canvas.width = ctx.canvas.clientWidth;
        ctx.canvas.height = ctx.canvas.clientHeight;

        for (var x = 0; x <= bw; x += 50) {
            context.moveTo(0.5 + x + p, p);
            context.lineTo(0.5 + x + p, bh + p);
        }

        for (x = 0; x <= bh; x += 50) {
            context.moveTo(p, 0.5 + x + p);
            context.lineTo(bw + p, 0.5 + x + p);
        }
        context.strokeStyle = "white";
        context.stroke();
    },
    clearGrids: (canvas) => {
        var context = canvas.getContext("2d");
        context.clearRect(0, 0, cw, ch);
    }
}
export default DrawUtil;