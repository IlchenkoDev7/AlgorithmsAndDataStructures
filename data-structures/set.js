// Структура данных, не допускающая дубликатов
const numberSet = new Set();

// Добавление элемента
numberSet.add(10);

// Получение объекта с массивом всех элементов, содержавшихся в сэте
numberSet.entries();

// Удаление элемента
numberSet.delete(10);

// Чистка сэта
numberSet.clear();

// Аналогичен методу values(), так как Set не имеет ключей, он выберет значения. Это сделано для семантической совместимости с Map (чтобы похожи были)
numberSet.keys()
for(let keys of numberSet.keys()) {
    console.log(keys);
}

// Получение значений
numberSet.values()
for(let values of numberSet.values()) {
    console.log(values);
}

// Получение размера
numberSet.size;

// Проверка, есть ли элемент в сэте
console.log(numberSet.has(10));

// Создание сэта на основе массива
const numberSet2 = new Set([10, 3, 5, 10]);
console.log(numberSet2);