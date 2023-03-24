const container = document.querySelector('#container');

for (x = 0; x < 256; x++) {
    const divs = document.createElement('div');
    divs.classList.add('grid');
    container.appendChild(divs);
}

const grid = document.querySelectorAll('.grid');

grid.forEach(element => {
    element.addEventListener('mouseenter', draw)
});
function draw(e){
    e.target.classList.add('ink');
}