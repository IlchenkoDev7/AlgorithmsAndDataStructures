// Быстрая сортировка
function quickSort(arr) {
    // Базовый случай, при котором вернется массив с одним элементом
    if(arr.length <= 1) {
        return arr;
    }

    // Поиск опорного элемента (без разницы какой это будет элемент, средний просто удобно)
    const pivotElement = arr[Math.floor(arr.length / 2)];

    const biggerElements = [];
    const smallerElements = [];
    const equalElements = [];

    // Распределение элементов на большие, меньшие и равные в зависимости от опорного элемента
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > pivotElement) {
            biggerElements.push(arr[i]);
        } else if(arr[i] < pivotElement) {
            smallerElements.push(arr[i]);
        } else {
            equalElements.push(arr[i]);
        }
    }

    // Большие и меньшие элементы запускаем в рекурсию, равные раскладываем
    return [...quickSort(smallerElements), ...equalElements, ...quickSort(biggerElements)];
}

const arr = [2, 1, 4, 33, 10, 7, 8];

console.log(quickSort(arr));