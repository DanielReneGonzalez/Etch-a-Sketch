const container = document.querySelector('#container');

for (x = 0; x < 256; x++) {
    const divs = document.createElement('div');
    divs.classList.add('grid');
    container.appendChild(divs);
}


function smallCanvus () {
    container.innerHTML="";
    for (x = 0; x < 256; x++) {
        const divs = document.createElement('div');
        divs.classList.add('grid');
        const divsReplace = document.querySelector('.grid')
        divsReplace.replaceWith(divs);
    }
}

const smallButton = document.querySelector('#small');
smallButton.addEventListener('click',smallCanvus)

function mediumCanvus () {
    container.innerHTML="";
    for (x = 0; x < 1024; x++) {
        const divs = document.createElement('div');
        divs.classList.add('mediumGrid');
        const divsReplace = document.querySelector('.grid')
        divsReplace.replaceWith(divs);
    }
}

const mediumButton = document.querySelector('#medium');
mediumButton.addEventListener('click',mediumCanvus)

function largeCanvus () {
    container.innerHTML="";
    for (x = 0; x < 4096; x++) {
        const divs = document.createElement('div');
        divs.classList.add('largeGrid');
        const divsReplace = document.querySelector('.largeGrid')
        divsReplace.replaceWith(divs);
    }
}
const largeButton = document.querySelector('#large');
largeButton.addEventListener('click',largeCanvus)

const grid = document.querySelectorAll('#container.div');

grid.forEach(element => {
    element.addEventListener('mouseenter', draw)
});
function draw(e){
    e.target.style.backgroundColor = 'black';
    console.log(e)
}

