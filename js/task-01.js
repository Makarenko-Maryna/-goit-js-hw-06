const categoriesEl = document.querySelectorAll('ul#categories .item');
const categoriesNum = `Number of categories: ${categoriesEl.length}`;
console.log(categoriesNum);
// console.log('Number of categories: ', categoriesEl.length);

const categoriesTitle = [];
categoriesEl.forEach(elem => {
    categoriesTitle.push(`Category: ${elem.querySelector('h2').textContent} Element: ${elem.querySelectorAll('ul>li').length}`)
})
console.log(...categoriesTitle)