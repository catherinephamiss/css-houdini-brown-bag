var wall = document.querySelector('.wall');
var msnry = new Masonry(wall, {
    // options...
    itemSelector: '.brick',
    columnWidth: 200,
    gutter: 10,
    horizontalOrder: true
});