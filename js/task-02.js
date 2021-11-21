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
  