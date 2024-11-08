const display = document.getElementById("display");
const backgrounds = [
    'https://images.hdqwalls.com/download/3d-space-5a-1336x768.jpg',
    'https://images.hdqwalls.com/download/3d-colorful-cubes-5y-1336x768.jpg',
    'https://images.hdqwalls.com/download/3d-graphic-ball-4k-y0-1336x768.jpg',
    'https://images.hdqwalls.com/download/3d-cubes-loops-surface-1f-1336x768.jpg',
    'https://images.hdqwalls.com/download/3d-render-flower-5k-ma-1336x768.jpg',
    'https://images.hdqwalls.com/download/3d-cube-art-4k-j0-1336x768.jpg'
];
let currentBackgroundIndex = 1;

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = "Error";
    }
}

function Clear() {
    display.value = "";
}

function changeBackground() {
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
    document.body.style.backgroundImage = `url(${backgrounds[currentBackgroundIndex]})`;
}
