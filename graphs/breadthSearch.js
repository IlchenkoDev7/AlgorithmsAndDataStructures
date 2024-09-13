// Обход графа в ширину
// Алгоритм позволяет определить, есть ли возможность из одного узла графа попасть в другой

// Граф без весов
const graph = {
    a: ['b', 'c'],
    b: ['f'],
    c: ['d', 'e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
    g: [],
};

// В основе лежит очередь, куда попадают все узлы графа, от начального и далее все его соседи и соседи этих соседей, пока не доберемся до конечного узла
function breadthSearch(graph, start, end) {
    const queue = [];
    
    // Проверка должна начинаться со стартового элемента
    queue.push(start);

    while(queue.length) {
        let current = queue.shift();

        // Если узел не прописан в графе, но при этом является кому-то соседом, надо его инициализировать
        if(!graph[current]) {
            graph[current] = [];
        }

        // Есть ли среди соседей искомый узел
        if(graph[current].includes(end)) {
            return true;
        }

        // Добавляем всех соседей в очередь
        graph[current].forEach(neighbor => {
            queue.push(neighbor);
        });
    }

    return false;
}

console.log(breadthSearch(graph, 'a', 'g'));