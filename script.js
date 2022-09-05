const container = document.querySelector('.container');
const gridSizeBtn = document.getElementById('btn');
const resetBtn = document.getElementById('resetBtn');
const blackBtn = document.getElementById('black');
const randomBtn = document.getElementById('random');
const eraseBtn = document.getElementById('erase');
const quantityVariable = '--quantity';

let red = '--red';
let green = '--green';
let blue = '--blue';
let squaresQuantity = 16;
let flag = '';

function addSquareToContainer(quantity){
    for(let i = 1; i<=quantity*quantity;i++){
        const square = document.createElement('div');
        square.classList.add(`square`);
        container.appendChild(square);
        square.addEventListener('mousedown', (e) =>{
            if(flag === 'black'){
                square.style.backgroundColor = `black`;
            }else if(flag === 'random'){
                red = getRandomInt();
                green = getRandomInt();
                blue = getRandomInt();
                square.style.backgroundColor = `rgb(${red},${green},${blue})`;
            }else if(flag === 'erase'){
                square.style.backgroundColor = `white`;

            }         
    
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

gridSizeBtn.addEventListener('click', function(){
    
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
resetBtn.addEventListener('click',function(){
    removeSquares();
    addSquareToContainer(squaresQuantity); 
})

blackBtn.addEventListener('click', ()=>{
    flag = 'black';
}
)

randomBtn.addEventListener('click', ()=>{
    flag = 'random';
}
)

eraseBtn.addEventListener('click', ()=>{
    flag = 'erase';
}
)
