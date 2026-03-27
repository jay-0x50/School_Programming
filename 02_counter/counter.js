const container = document.getElementById('container');
// const plusButton = document.getElementById('plusButton');
// const minusButton = document.getElementById('minusButton');


// plusButton.addEventListener('click', () => {
//     const currentValue = parseInt(container.textContent);
//     container.textContent = currentValue + 1;
// });
// plusButton.addEventListener('click', () => {
//     const currentValue = parseInt(container.textContent);
//     container.textContent = currentValue + 2;
// }
// minusButton.addEventListener('click', () => {
//     const currentValue = parseInt(container.textContent);
//     container.textContent = currentValue - 1;
// });

let count = 0;

function eventButton( value = 1 ) {
    count += value;
    container.textContent = count;
} // eventButton()