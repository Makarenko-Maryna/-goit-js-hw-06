// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.


const inputEl = document.querySelector("#font-size-control");

const textEl = document.querySelector("#text");

// узнать значение шрифта документа
const textSizeDefault = Number(
  window
    .getComputedStyle(document.body)
    .getPropertyValue("font-size")
    .match(/\d+/)[0]
);

// функция изменния размера шрифта
const changeTextSize = () =>
  (textEl.style.fontSize = `${(textSizeDefault * inputEl.value) / 50}px`);

// слушать изменения на поле ввода
inputEl.addEventListener("input", changeTextSize.bind(inputEl));