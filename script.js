const container = document.querySelector('.container');
const button = document.getElementById('btn');
const quantityVariable = '--quantity';
const red = '--red';
const green = '--green';
const blue = '--blue';
let squaresQuantity = 16;

const addSquareToContainer = function(quantity){
    for(let i = 1; i<=quantity*quantity;i++){
        const square = document.createElement('div');
        square.classList.add(`square`);
        container.appendChild(square);
        square.addEventListener('mouseover', (e) =>{
            let squareHover = document.querySelector('.square:hover');
            squareHover.style.setProperty(red,getRandomInt());
            squareHover.style.setProperty(green,getRandomInt());
            squareHover.style.setProperty(blue,getRandomInt());
        })
        
    }
}

const removeSquares = function(){
    let square = document.querySelector('.square');
    while(square){
        container.removeChild(square);
        square = document.querySelector('.square');
    }
}

function getRandomInt() {
    return Math.floor(Math.random() * (256));
}
addSquareToContainer(squaresQuantity);

button.addEventListener('click', function(){
    
    let numberOfSquares = prompt('Pass a number of squares');
    if(numberOfSquares <= 100){
        removeSquares();
        squaresQuantity = Number(numberOfSquares)
        addSquareToContainer(squaresQuantity);    
        container.style.setProperty(quantityVariable,squaresQuantity);
    
    }else{
        alert('Pass a number higher than 0 and less than 101!');
    }
});