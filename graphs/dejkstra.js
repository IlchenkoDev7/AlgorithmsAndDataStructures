const graph = {};

graph.a = {b: 2, c: 1};
graph.b = {f: 7};
graph.c = {d: 5, e: 2};
graph.d = {f: 5};
graph.e = {f: 1};
graph.f = {g: 1};
graph.g = {};

// Позволяет получить самое короткое расстояние от начального узла графа до всех остльных.
// То есть это уже обход графа с учётом весов каждой связи между узлами
function dejkstraAlgorithm(graph, start) {
    const costs = {};
    const processed = [];

    // Задаём базовые стоимости для всех узлов графа
    // Проверка, есть ли у каждого узла графа связь со стартом, если есть, добавляем стоимость этому узлу на основе его расстояния от старта, всем остальным узлам устанавливаем очень высокую стоимость
    Object.keys(graph).forEach(node => {
        // У стартового узла не может быть связи с самим собой, а на этом этапе проверяются именно связи стартового элемента
        if(node !== start) {
            let value = graph[start][node];
            costs[node] = value ? value : 1000000000;
        }
    })

    // находим самый дешевый узел
    let node = findNodeWithLowestCost(costs, processed);

    // Запускаем цикл, который будет работать, пока самые дешёвые узлы ещё будут находиться
    while(node) {
        let cost = costs[node];
        let neighbors = graph[node];

        // Если у нас есть узел, который сосед проверяемого узла и он уже имеет какой-то вес, то мы смотрим, может через текущий узел дойти к нему дешевле и если да, то заменяем стоимость для этого соседа
        // То есть главное: дешевле ли через текущий путь или то что уже есть все таки лучше
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor];
            if(newCost < costs[neighbor]) {
                costs[neighbor] = newCost;
            }
        })

        // Помечаем, что узел пройден, чтобы при поиске дешевого узла, он уже не нашелся, цикл рискует быть бесконечным и с большей долей вероятности будет, так как узлы соседи часто стоят дороже, значит текущий отобразиться как дешевый, будет выбран и так по новой без выхода
        processed.push(node);

        // Ищем самую дешевую ноду из еще непроверенных, там будут соседи, для которых мы только что определились со стоимостью. Продолжаем тем самым исполнение цикла
        node = findNodeWithLowestCost(costs, processed);
    }

    return costs;
}

// Поиск самого дешёвого узла из непрошедших проверку
function findNodeWithLowestCost(costs, processed) {
    let lowestCost = 1000000000;
    let lowestNode;

    Object.keys(costs).forEach(node => {
        if(costs[node] < lowestCost && !processed.includes(node)) {
            lowestCost = costs[node];
            lowestNode = node;
        }
    })

    return lowestNode;
}

console.log(dejkstraAlgorithm(graph, "a"));