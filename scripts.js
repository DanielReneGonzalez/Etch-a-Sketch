const container = document.querySelector('#container');
const grid = document.querySelectorAll('#container.div');



function drawing() {
    grid.forEach(element => {
        element.addEventListener('mouseenter', draw)
    });
    function draw(e){
        e.target.style.color = 'black';
        console.log(e)
    }
    
}

for (x = 0; x < 256; x++) {
    const divs = document.createElement('div');
    divs.classList.add('smallGrid');
    container.appendChild(divs);
}


function smallCanvus () {
    container.innerHTML="";
    for (x = 0; x < 256; x++) {
        const divs = document.createElement('div');
        divs.classList.add('smallGrid');
        container.appendChild(divs);
    }
    drawing()
}

const smallButton = document.querySelector('#small');
smallButton.addEventListener('click',smallCanvus)

function mediumCanvus () {
    container.innerHTML="";
    for (x = 0; x < 1024; x++) {
        const divs = document.createElement('div');
        divs.classList.add('mediumGrid');
        container.appendChild(divs);
    }
    drawing()
}

const mediumButton = document.querySelector('#medium');
mediumButton.addEventListener('click',mediumCanvus)

function largeCanvus () {
    container.innerHTML="";
    for (x = 0; x < 4096; x++) {
        const divs = document.createElement('div');
        divs.classList.add('largeGrid');
        container.appendChild(divs);
    }
    drawing()
}
const largeButton = document.querySelector('#large');
largeButton.addEventListener('click',largeCanvus)



