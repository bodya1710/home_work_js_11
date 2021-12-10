//є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку
// об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
let arrFavorites = [];
for (let i = 0; i < users.length; i++) {
    let userContainer = document.createElement('div');
    let userNameContainer = document.createElement('div');
    userNameContainer.innerText = `${users[i].name}`;
    let userAgeContainer = document.createElement('div');
    userAgeContainer.innerText = `${users[i].age}`;
    document.body.appendChild(userContainer);
    userContainer.appendChild(userNameContainer);
    userContainer.appendChild(userAgeContainer);
    let btnTakeFavorite = document.createElement('button');
    btnTakeFavorite.innerText = 'Favorite';
    userContainer.appendChild(btnTakeFavorite);
    btnTakeFavorite.addEventListener('click', function () {
        arrFavorites.push(users[i]);
        localStorage.setItem(`favorites`, JSON.stringify(arrFavorites))
    })
}



