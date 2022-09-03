const container = document.querySelector('.container');
const gridSizeButton = document.getElementById('btn');
const resetButton = document.getElementById('resetBtn');
const quantityVariable = '--quantity';
let red = '--red';
let green = '--green';
let blue = '--blue';
let squaresQuantity = 16;

function addSquareToContainer(quantity){
    for(let i = 1; i<=quantity*quantity;i++){
        const square = document.createElement('div');
        square.classList.add(`square`);
        container.appendChild(square);
        
        square.addEventListener('mouseenter', () =>{
            
            // Random color of squares
            red = getRandomInt();
            green = getRandomInt();
            blue = getRandomInt();
            square.style.backgroundColor = `rgb(${red},${green},${blue})`;
            // square.style.backgroundColor = 'black';
    
        })
        
    }
}

function removeSquares(){
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

gridSizeButton.addEventListener('click', function(){
    
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

resetButton.addEventListener('click',function(){
    removeSquares();
    addSquareToContainer(squaresQuantity); 
})