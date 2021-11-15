
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
let valueEl = document.querySelector('#value');
let counterValue = 0;

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueEl);

incrementBtn.addEventListener('click', function () {
    counterValue += 1;
    valueEl.textContent = counterValue;
    console.log(valueEl);
});

decrementBtn.addEventListener('click', function () {
    counterValue -= 1;
    valueEl.textContent = counterValue;
    console.log(valueEl);
});
