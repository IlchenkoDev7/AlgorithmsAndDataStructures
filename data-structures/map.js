class User {
    constructor(name) {
        this.name = name;
    }
}

const userMap = new Map();

const us1 = new User("alex");

// Получение размера
userMap.size;

// Добавление значения в мапу
userMap.set(us1, new Date());

// Удаление элемента по ключу
userMap.delete(us1);

// Получение элемента мапы по ключу
userMap.get(us1);

// Есть ли элемент с переданным ключем в мапе
userMap.has(us1);

// Получение всех значений мапы
userMap.values();
for(let mapValue of userMap.values()) {
    console.log(mapValue);
}

// Получение всех ключей мапы
userMap.keys();
for(let mapKey of userMap.keys()) {
    console.log(mapKey);
}

// Получение массива для каждого элемента мапы формата ключ -> значение
userMap.entries();
for(let pairArr of userMap.entries()) {
    console.log(pairArr);
}

// Чистка всей мапы
userMap.clear();

// Создание мапы через конструктор самого класса Map
// Внутри себя мапа представляет собой массив с массивами, где ключ - нулевой элемент, значение - первый
const userMap2 = new Map(
    [
        [us1, new Date()]
    ]
);