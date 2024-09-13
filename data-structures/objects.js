const id = Symbol('id')

const user = {
    [id]: 1,
    name: "Alex",
    surname: "Ilc",
    age: 18
}

// Перебор всех полей объекта
for (const key in user) {
    console.log(user[key]);
}

// Получение массива названий всех полей
Object.keys(user).forEach((item) => {
    console.log(item);
});

// Получение значений всех полей
Object.values(user).forEach((item) => {
    console.log(item);
});

// Вернёт массив массивов, где первый элемент - название поля массива, второй - значение поля
console.log('entries')
Object.entries(user);
console.log(Object.entries(user))

// Получение всех Symbol объекта
Object.getOwnPropertySymbols(user).forEach((item) => {
    console.log(user[item])
})