const container = document.querySelector('.container');



const addSquareToContainer = function(quantity){
    for(let i = 1; i<=quantity;i++){
        const square = document.createElement('div');
        square.classList.add(`square`);
        container.appendChild(square);
    }
}

addSquareToContainer(256);