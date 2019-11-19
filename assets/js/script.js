'use strict';

// register new css properties
CSS.registerProperty({
    name: '--pacman-color-one',
    syntax: '<color>',
    inherits: true,
    initialValue: 'gray'
}, {
    name: '--pacman-color-two',
    syntax: '<color>',
    inherits: true,
    initialValue: 'lightgray',
}, {
//     name: '--line-color',
//     syntax: '<color>',
//     inherits: true,
//     initialValue: 'black'
// }, {
//     name: '--line-thickness',
//     syntax: '<length>',
//     inherits: true,
//     initialValue: '2px'
// }, {
    name: '--hover',
    syntax: '<color>',
    inherits: true,
    initialValue: 'lightpurple'
});

// add worklets below
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('assets/js/worklets/pacman-paint-worklet.js');
    // CSS.paintWorklet.addModule('assets/js/worklets/headings-paint-worklet.js');
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