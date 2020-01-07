'use strict';

// register new css properties
if ('registerProperty' in CSS) {
    CSS.registerProperty({
        name: '--pacman-color-one',
        syntax: '<color>',
        inherits: true,
        initialValue: 'gray'
    })
    CSS.registerProperty({
        name: '--pacman-color-two',
        syntax: '<color>',
        inherits: true,
        initialValue: 'lightgray',
    })
    CSS.registerProperty({
        name: '--pacman-color-three',
        syntax: '<color>',
        inherits: true,
        initialValue: 'darkgray',
    })
    CSS.registerProperty({
        name: '--pacman-color-four',
        syntax: '<color>',
        inherits: true,
        initialValue: 'slategray',
    })
    CSS.registerProperty({
        name: '--grad-color',
        syntax: '<color>',
        inherits: false,
        initialValue: 'transparent'
    })
    CSS.registerProperty({
        name: '--line-color',
        syntax: '<color>',
        inherits: false,
        initialValue: 'blue'
    })
    CSS.registerProperty({
        name: '--line-width',
        syntax: '<integer>',
        inherits: false,
        initialValue: '5'
    })
    CSS.registerProperty({
        name: '--line-number',
        syntax: '<integer>',
        inherits: false,
        initialValue: '3'
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

// Typed OM stuff below
const headingOne = document.getElementById('page-title');
// headingOne.attributeStyleMap.set('--hover', 'gold');

const helloWorld = document.getElementById("hello-world");
helloWorld.attributeStyleMap.set('--line-number', 10);
helloWorld.attributeStyleMap.set('--line-width', 1);