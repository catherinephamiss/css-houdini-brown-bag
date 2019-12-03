'use strict';

// register new css properties
if('registerProperty' in CSS) {
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
    });
    CSS.registerProperty({
        name: '--hover',
        syntax: '<color>',
        inherits: true,
        initialValue: 'transparent'
    });
    CSS.registerProperty({
        name: '--line-color',
        syntax: '<color>',
        inherits: true,
        initialValue: 'blue'
    });
    CSS.registerProperty({
        name: '--line-width',
        syntax: '<length>',
        inherits: true,
        initialValue: '10px'
    })
} else {
    document.querySelector('html').classList.add('no-houdini-support');
}

// add worklets below
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('assets/js/worklets/pacman-paint-worklet.js');
    CSS.paintWorklet.addModule('assets/js/worklets/headings-paint-worklet.js');
} else {
    document.querySelector('html').classList.add('no-houdini-support');
}

// if ('animationWorklet' in CSS) {
//     CSS.animationWorklet.addModule('assets/js/worklets/magical-animation-worklet.js');
// } else {
//     document.querySelector('html').classList.add('no-houdini-support');
// }

// if ('layoutWorklet' in CSS) {
//     CSS.layoutWorklet.addModule('assets/js/worklets/magical-layout-worklet.js');
// } else {
//     document.querySelector('html').classList.add('no-houdini-support');
// }