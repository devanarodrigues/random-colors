const colors = ["#FF76CE", "#FDFFC2", "#94FFD8", "#A3D8FF", "#121481", "#FFCBCB", "#9AC8CD", "#8576FF", "#A3FFD6", "#D895DA", "#FF204E", "#F7418F"]
let randomColor = shuffleArray(colors)
const cor = document.getElementById('cor')
const body = document.getElementsByTagName('body')[0]
let i = 0


function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function changeColor() {
    body.style.backgroundColor = randomColor[i]
    cor.parentElement.style.display = 'block'
    cor.innerHTML= randomColor[i]
    i++
    if (i >= randomColor.length) {
        i = 0
        randomColor = shuffleArray(colors);
    }
}