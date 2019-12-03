'use strict';

if (typeof registerPaint !== 'undefined') {

    class HeadingUnderline {
        static get inputProperties() {
            return ['--line-color', '--line-width'];
        }

        paint(ctx, geometry, properties) {
            const color = properties.get('--line-color');
            const thickness = properties.get('--line-width');
            ctx.strokeStyle = color;
            ctx.lineWidth = thickness;

            const yStart = Math.floor(Math.random() * geometry.height -1);
            const xEnd = geometry.width;
            const yEnd = Math.floor(Math.random() * geometry.height -1);

            console.log("yStart:", yStart)
            console.log("xEnd:", xEnd)
            console.log("yEnd:", yEnd)

            ctx.beginPath();
            ctx.moveTo(0, yStart);
            ctx.lineTo(xEnd, yEnd);
            ctx.closePath();
            ctx.stroke();
        }

    }

    registerPaint('HeadingUnderline', HeadingUnderline);
}