'use strict';

// register new css properties
CSS.registerProperty({
    name: '--magic-color-one',
    syntax: '<color>',
    inherits: false,
    initialValue: 'gray'
});
CSS.registerProperty({
    name: '--magic-color-two',
    syntax: '<color>',
    inherits: false,
    initialValue: 'lightgray',
});

// add worklets below
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('assets/js/worklets/magical-paint-worklet.js');
} else {
    document.querySelector('html').classList.add('no-paintapi-support');
}

// if ('animationWorklet' in CSS) {
//     CSS.animationWorklet.addModule('assets/js/worklets/magical-animation-worklet.js');
// } else {
//     document.querySelector('html').classList.add('no-animationapi-support');
// }

// if ('layoutWorklet' in CSS) {
//     CSS.layoutWorklet.addModule('assets/js/worklets/magical-layout-worklet.js');
// } else {
//     document.querySelector('html').classList.add('no-layoutapi-support');
// }