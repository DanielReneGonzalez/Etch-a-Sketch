const container = document.querySelector('#container');

for (x = 0; x < 256; x++) {
    const divs = document.createElement('div');
    divs.classList.add('grid');
    container.appendChild(divs);
}

const divs = document.querySelector('.grid')

divs.addEventListener('mouseover', (e) => {
    e.target.style.color = 'black';
})