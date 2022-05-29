import './css/common.scss';
import { refs } from './scripts/refs';
import { createLi, addLiToList } from './scripts/generateMarkdown';
import { storage } from './helpers/storage';

refs.form.addEventListener('submit', handleSubmit);

const handleMount = () => {
    const list = storage.readItem('list', [])
    const markdown = list.reduce((acc, text) => acc + createLi(text), "");
    addLiToList(markdown);
}

function handleSubmit (e) {   
    e.preventDefault();
    const value = refs.input.value;
    addLiToList(createLi(value));
    const result = storage.readItem('list', []);
    result.push(value);
    storage.addItem('list', result)
    console.log(result);      
    
    refs.input.value = '';
}

addEventListener('DOMContentLoaded', handleMount);

// storage => ['test']
// 1. прочитати сторедж
// 2. перетворити в масив з JSON
// 3. запушити в масив нові данні
// 4. конвертувати новый массив в JSON
// 5. записати новый JSON в сторедж






















// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading);

// const user = {
//     name: 'Mango',
//     age: 22,
// }

// // приводим в JSON формат
// const saveUserData = JSON.stringify(user);
// // console.log(saveUserData)

// // приводим JSON в обьект
// const objUserData = JSON.parse(saveUserData);
// console.log(objUserData);

// // console.log(localStorage);

// // setItem записать
// localStorage.setItem('key', saveUserData);

// // getItem прочитать
// console.log(localStorage.getItem('key'));