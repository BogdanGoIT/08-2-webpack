import './css/common.scss'

// Create heading node
const heading = document.createElement('h1')
heading.textContent = 'Interesting!'

// Append heading node to the DOM
const app = document.querySelector('#root')
app.append(heading);

const user = {
    name: 'Mango',
    age: 22,
}

// приводим в JSON формат
const saveUserData = JSON.stringify(user);
// console.log(saveUserData)

// приводим JSON в обьект
const objUserData = JSON.parse(saveUserData);
console.log(objUserData);

// console.log(localStorage);

// записать
localStorage.setItem('key', saveUserData);

// прочитать
console.log(localStorage.getItem('key'));