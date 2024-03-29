// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data - length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const form = document.querySelector("#validation-input");

form.addEventListener("blur", onInputLength);

function onInputLength() {
 
  if (form.data-length >= 6) {
      form.classList.add(".valid");
    //   form.classList.remove('.invalid');
  } else {
      form.classList.add(".invalid");
    //   form.classList.remove('.valid');
    }
}