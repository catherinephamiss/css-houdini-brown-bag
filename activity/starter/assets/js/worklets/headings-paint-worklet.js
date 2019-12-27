'use strict';

if (typeof registerPaint !== 'undefined') {

    class HeadingUnderline {
        static get inputProperties() {
            // time to go retrieve relevant css properties
        }

        paint(ctx, size, props) {
            // make magic happen!
            
        }

    }

    registerPaint('HeadingUnderline', HeadingUnderline);
}