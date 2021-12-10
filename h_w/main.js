//-створити форму з інпутами для name та age.
// При відправці форми записати об'єкт в localstorage
let formInput = document.createElement('form');
let inputName = document.createElement('input');
let inputAge = document.createElement('input');
let inputBtn = document.createElement('button');
inputName.type = 'text';
inputAge.type = 'number';
inputBtn.innerText = 'Click';
document.body.appendChild(formInput);
formInput.appendChild(inputName);
formInput.appendChild(inputAge);
formInput.appendChild(inputBtn);
inputBtn.addEventListener('click', function () {
    let user = JSON.stringify({name: inputName.value,
        age:   inputAge.value});
    localStorage.setItem('user', user);
})







