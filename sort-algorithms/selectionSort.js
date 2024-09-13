const arr = [2, 1, 4, 33, 10, 7, 8];

// Выборочная сортирока
// 
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        // Индекс минимального элемента
        let minIndex = i;

        // За полный цикл, мы находим самый минимальный элемент, индекс которого сохраняем в minIndex
        for(let j = i; j < arr.length; j++) {
            if(arr[j] < arr[minIndex])
                minIndex = j;
        }
        
        // Элемент, который был на этой позиции меняем на самый минимальный, который нашли в цикле выше
        const tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }

    return arr.toString();
}

console.log(selectionSort(arr));