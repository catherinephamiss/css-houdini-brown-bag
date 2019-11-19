'use strict';

if (typeof registerPaint !== 'undefined') {

    class HeadingUnderline {
        static get inputProperties() {
            return ['--heading-color', '--heading-thickness'];
        }

        paint(ctx, geometry, properties) {
            const color = properties.get('--heading-color');
            const thickness = properties.get('--heading-thickness');
        }

    }

    registerPaint('HeadingUnderline', HeadingUnderline);
}