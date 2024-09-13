const arr = [1, 3, 4, 5, 6, 7, 8, 9, 15, 33];

// Рекурсивный бинарный поиск
function binarySearchRecursion(arr, searchNumber, start = 0, end = arr.length - 1) {
    let middle = Math.floor((start + end) / 2);

    // Два базовых случая, либо мы вышли за пределы, либо элемент был найден и мы передаём управление выше и так до конца
    if(start === end) return -1;
    if(arr[middle] === searchNumber) return middle;

    // Рекурсивный вызов с новыми значениями "курсоров"
    return binarySearchRecursion(arr, searchNumber, searchNumber > middle ? middle + 1 : start, searchNumber < middle ? middle - 1 : end);
}

console.log('Key: ', binarySearchRecursion(arr,15));