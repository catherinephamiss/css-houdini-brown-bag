'use strict';

// register new css properties
if('registerProperty' in CSS) {
    CSS.registerProperty({
        // stuff goes in here

    })
} else {
    document.querySelector('html').classList.add('no-houdini-support');
}

// add worklets below
if ('paintWorklet' in CSS) {
    // here's another blank to be filled by you!

} else {
    document.querySelector('html').classList.add('no-houdini-support');
}

// Typed OM stuff below
const headingOne = document.getElementById('page-title');
// what do you think you're supposed to put here?