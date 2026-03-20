const container = document.getElementById('container');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    const currentValue = parseInt(container.textContent);
    container.textContent = currentValue + 1;
});