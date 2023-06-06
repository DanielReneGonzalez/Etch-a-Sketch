const container = document.querySelector('#container');
const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function drawing() {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'black' });
    });
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


function redColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'red' });
    });
}

const redButton = document.querySelector('#red');
redButton.addEventListener('click', redColor)

function blueColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'blue' });
    });
}

const blueButton = document.querySelector('#blue');
blueButton.addEventListener('click', blueColor)

function greenColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'green' });
    });
}

const greenButton = document.querySelector('#green');
greenButton.addEventListener('click', greenColor)

function yellowColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'yellow' });
    });
}

const yellowButton = document.querySelector('#yellow');
yellowButton.addEventListener('click', yellowColor)

function blackColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'black' });
    });
}

const blackButton = document.querySelector('#black');
blackButton.addEventListener('click', blackColor)

function whiteColor () {
    const grid = document.querySelectorAll('div.smallGrid, div.mediumGrid, div.largeGrid');
    grid.forEach(element => {
        element.addEventListener('mouseover', function draw (e){
            if (e.type === 'mouseover' && !mouseDown) return
            e.target.style.backgroundColor = 'white' });
    });
}

const whiteButton = document.querySelector('#white');
whiteButton.addEventListener('click', whiteColor)
