'use strict';

// check to make sure paint api is supported
if (typeof registerPaint !== 'undefined') {

    class Magic {
        // grab custom property
        static get inputProperties() {
            return ['--magic-color'];
        }

        paint(ctx, geometry, properties) {
            const magicColor = properties.get('--magic-color');
            console.log(magicColor);
            ctx.fillStyle = magicColor;
            ctx.fillRect(0, 0, geometry.width, geometry.height);
        }
    }

    registerPaint('Magic', Magic);
}