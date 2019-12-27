'use strict';

// register new css properties
if ('registerProperty' in CSS) {
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
        name: '--pacman-color-three',
        syntax: '<color>',
        inherits: true,
        initialValue: 'darkgray',
    }, {
        name: '--pacman-color-four',
        syntax: '<color>',
        inherits: true,
        initialValue: 'slategray',
    }, {
        name: '--grad-color',
        syntax: '<color>',
        inherits: true,
        initialValue: 'green'
    }, {
        name: '--line-color',
        syntax: '<color>',
        inherits: true,
        initialValue: 'blue'
    }, {
        name: '--line-width',
        syntax: '<number>',
        inherits: true,
        initialValue: '5'
    }, {
        name: '--line-number',
        syntax: '<integer>',
        inherits: true,
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