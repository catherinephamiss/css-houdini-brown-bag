'use strict';

if (typeof registerPaint !== 'undefined') {

    class HeadingUnderline {
        static get inputProperties() {
            return ['--line-color', '--line-width', '--line-number'];
        }

        paint(ctx, geometry, properties) {
            const color = properties.get('--line-color');
            const thickness = properties.get('--line-width');
            const number = properties.get('--line-number');
            ctx.strokeStyle = color;
            ctx.lineWidth = thickness;

            for (let i=0; i<number; i++) {
                const yStart = Math.floor(Math.random() * geometry.height - 1);
                const xEnd = geometry.width;
                const yEnd = Math.floor(Math.random() * geometry.height - 1);

                ctx.beginPath();
                ctx.moveTo(0, yStart);
                ctx.lineTo(xEnd, yEnd);
                ctx.closePath();
                ctx.stroke();
            }

        }

    }

    registerPaint('HeadingUnderline', HeadingUnderline);
}