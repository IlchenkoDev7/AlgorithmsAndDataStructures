const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Алгоритм поиска элемента в отсортированном массиве, при котором в каждой новой итерации длина массива сокращается вдвое
function binarySearch(sortedIntArrToSearch, searchNumber) {
    // "курсоры", которыми мы ограничиваем количество элементов для проверки
    let start = 0;
    let end = sortedIntArrToSearch.length - 1;

    while (start <= end) {
        // Получение индекса среднего элемента
        let middle = Math.floor((start + end) / 2);
        
        // Проверяем, равен ли средний элемент искомому значению, заканчиваем исполнение если равен
        if(sortedIntArrToSearch[middle] === searchNumber) {
            return sortedIntArrToSearch[middle]
        }

        // Выбираем в какой части массива необходимо искать элемент и устанавливаем "курсоры"
        if (searchNumber < sortedIntArrToSearch[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    // Если элемент не нашёлся, возвращаем -1
    return -1;
}

console.log(binarySearch( arr, 2 ));