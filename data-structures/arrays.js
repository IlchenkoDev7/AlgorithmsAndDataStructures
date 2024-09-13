const array = [10, 39, 49, 20, 48];

// Вставляет элемент в самый конец массива
array.push(10);

// Удаляет и возврашает последний элемент массива
array.pop();

// Вставляет элемент в самое начало массива
array.unshift(2);

// Удаляет и возврашает первый элемент массива
array.shift()

// Есть ли в массиве элемент
array.includes(10)

// Вернёт первое, найденное по заданному в коллбэке условию, значение 
array.find((item) => {
  return item > 40;
})

// Также найдёт значение, единственное, вернёт его индекс в массиве, а не сам элемент
array.findIndex((item) => {
  return item > 40;
})

// Меняет массив, на котором вызван, вместо того, чтобы вернуть новый
// Удобно удалять и добавлять элементы
array.splice(1, 0, 'hello')

// Простой перебор элементов массива
array.forEach((item) => {
  console.log(item);
})

for (let item of array) {
  console.log(item);
}

// Возвращает новый массив такой же длины, преобразуя каким-либо образом каждый элемент массива
// Коллбэк должен вернуть значение, которое должно быть вместо того элемента, что был в старом массиве
const newArr1 = array.map((item) => {
  return item + 3;
})

// Возвращает новый массив, в который попадут только те элементы, с которыми в условии в коллбэке вернулось true
// Коллбэк должен вернуть bool-значение
const newArr2 = array.filter((item) => {
  return item > 10;
})

// Свзяывает все элементы в массива с помощью сепаратора в одну строку
array.join(', ')

// Вернёт индекс искомого элемента 
array.indexOf(10)

// Подсчёт какого-то общего значения на основе каждого из элементов массива
let initSummarizeVal = 0;
array.reduce((summarizeVal, item) => {
  return summarizeVal += item;
}, initSummarizeVal)

// Получение длины массива
array.length