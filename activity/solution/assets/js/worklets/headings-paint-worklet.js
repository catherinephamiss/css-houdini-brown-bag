'use strict';

if (typeof registerPaint !== 'undefined') {

    class HeadingUnderline {
        static get inputProperties() {
            return ['--line-color', '--line-width', '--line-number'];
        }

        paint(ctx, size, props) {
            const color = props.get('--line-color');
            const width = props.get('--line-width');
            const number = props.get('--line-number');

            for (let i=0; i<number; i++) {
                const yStart = Math.floor(Math.random() * size.height - 1);
                const xEnd = size.width;
                const yEnd = Math.floor(Math.random() * size.height - 1);

                ctx.strokeStyle = 'black';
                ctx.lineWidth = width;
                ctx.moveTo(0, yStart);
                ctx.lineTo(xEnd, yEnd);
                ctx.stroke();
                
                ctx.strokeStyle = color;
                ctx.lineWidth = width;
                ctx.moveTo(0, yStart);
                ctx.lineTo(xEnd, yEnd);
                ctx.stroke();
            }

        }

    }

    registerPaint('HeadingUnderline', HeadingUnderline);
}