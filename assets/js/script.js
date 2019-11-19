'use strict';

// add worklets below
if ('paintWorklet' in CSS) {
    CSS.paintWorklet.addModule('assets/js/worklets/magical-paint-worklet.js');
} else {
    document.querySelector('body').classList.add('no-paintapi-support');
}

if ('animationWorklet' in CSS) {
    CSS.animationWorklet.addModule('assets/js/worklets/magical-animation-worklet.js');
} else {
    document.querySelector('body').classList.add('no-paintapi-support');
}

if ('layoutWorklet' in CSS) {
    CSS.layoutWorklet.addModule('assets/js/worklets/magical-layout-worklet.js');
} else {
    document.querySelector('body').classList.add('no-paintapi-support');
}