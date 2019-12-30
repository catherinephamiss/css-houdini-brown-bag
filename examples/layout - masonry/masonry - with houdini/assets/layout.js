if (location.protocol === 'http:' && location.hostname !== 'localhost')
    location.protocol = 'https:';
document.querySelectorAll('div').forEach(elem => {
    const t = elem.textContent;
// Cut out a random amount of text, but keep at least 10 characters
elem.textContent = t.slice(0, Math.floor(Math.random() * (t.length - 10) + 10));
})
if ('layoutWorklet' in CSS) {
    CSS.layoutWorklet.addModule('masonry.js');
} else {
    document.body.innerHTML = 'You need support for <a href="https://drafts.css-houdini.org/css-layout-api/">CSS Layout API</a> to view this demo :(';
}
