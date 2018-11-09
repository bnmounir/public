var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplayed = document.querySelector('#message');
var resetBtn = document.querySelector('#resetBtn');
var h1 = document.querySelector('h1');
var modeBtns= document.querySelectorAll('.mode');

init();

function init(){
    setupMode()
    setupSquares()
    reset();
}
function setupMode(){
    for(var i = 0; i < modeBtns.length; i++){
        modeBtns[i].addEventListener('click', function(){
            modeBtns[0].classList.remove('selected');
            modeBtns[1].classList.remove('selected');
            this.classList.add('selected');
            this.textContent == 'Easy' ? numSquares = 3: numSquares = 6;
            reset();
        });
    }
}
function setupSquares(){
    for(var i = 0; i < squares.length; i++){
        squares[i].addEventListener('click', function(){
            var clickedColor = this.style.backgroundColor;
            if(clickedColor === pickedColor){
                messageDisplayed.textContent = 'Correct';
                resetBtn.textContent = "Play Again?";
                changeColor(clickedColor);
                h1.style.backgroundColor = clickedColor;
            }else{
                this.style.backgroundColor = '#232323';
                messageDisplayed.textContent = 'Try Again';
            }
        })
    }
}

function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    resetBtn.textContent = "New Colors";
    colorDisplay.textContent = pickedColor;
    messageDisplayed.textContent = '';
    for (let i = 0; i < squares.length; i++) {
        if(colors[i]){
            squares[i].style.display = 'block'
            squares[i].style.backgroundColor = colors[i];
        }else{
            squares[i].style.display = 'none';
        }
    }
    h1.style.backgroundColor = "steelblue";
}
resetBtn.addEventListener('click', function(){
    reset();
})

function changeColor(color){
    for (let i = 0; i < colors.length; i++) {
        squares[i].style.backgroundColor = color;
    }
}
function pickColor(){
    var random = Math.floor(Math.random()* colors.length);
    return colors[random];
}
function generateRandomColors(num){
    var arr = [];
    for (let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}
function randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb('+r+', '+g+', '+b+')';

}