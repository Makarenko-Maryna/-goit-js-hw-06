// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const pickerIngre = document.querySelector('#ingredients');

const makePickerIngre = ingre => {
  return ingre.map(ingr => {
    const itemEl = document.createElement('li');
    itemEl.textContent = ingr;
    itemEl.classList.add('item');
    
    return itemEl;
  });
};
  const elem = makePickerIngre(ingredients);
    
pickerIngre.append(...elem);
  
// console.log(makePickerIngre)
