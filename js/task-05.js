const inputForm = document.querySelector('[id="name-input"]');
const outPut = document.querySelector('[id="name-output"]');
console.log('inputForm: ', inputForm)
console.log('outPut: ', outPut.textContent)
inputForm.addEventListener('input', onFormSubmit);
function onFormSubmit(event) {
    if (inputForm.value === "") {
        outPut.textContent = "Anonymus"
    }
    else {
        outPut.textContent = event.target.value;
    }
}