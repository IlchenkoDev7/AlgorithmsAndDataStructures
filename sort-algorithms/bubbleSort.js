const arr = [1, 10, 7, 33, 100, 40, 4, 6, 50];

// Пузырьковая сортировка
function bubbleSort(arr) {
    // Проходим по каждому элементу массива
    for(let i = 0; i < arr.length; i++) {
        // Проходим по каждому элементу, который ещё не был пройден
        // На каждой итерации этого цикла сравниваются два ближайших элемента, по итогам этих сравнений за все итерации этого цикла самый большой элемент окажется выше остальных
        // После чего мы уже сократим количество итераций, чтобы этот элемент больше не сравнивался
        // Но главное, с каждым новым прогоном всех доступных итераций этого цикла, один элемент, самый большой, оказывается выше всех из ещё непроверенных
        for(let j = 0; j < arr.length - i; j++) {
            
            // Если текущий элемент больше следующего, полнимаем его, а тот, который был следующим, опускаем
            if(arr[j + 1] < arr[j]) {
                const tmp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = tmp;
            }

        }

    }

    return arr;
}

console.log(bubbleSort(arr))