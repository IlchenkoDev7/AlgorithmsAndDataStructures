const tree = [
    {
        value: 10,
        childrens: [
            {
                value: 13,
                childrens: [
                    {
                        value: 5,
                    },
                    {
                        value: 2,
                        childrens: [
                            {
                                value: 1,
                            },
                            {
                                value: 9,
                            },
                        ]
                    },
                ],
            },
        ]
    },
    {
        value: 40,
        childrens: [
            {
                value: 3,
                childrens: [
                    {
                        value: 5,
                        childrens: [
                            {
                                value: 10,
                            },
                            {
                                value: 3,
                            },
                        ]
                    },
                    {
                        value: 2,
                    },
                ],
            },
        ]
    }
];

// Рекурсивный проход по дереву с суммированием всех значений
function recursionTree(tree) {
    let sum = 0;

    // Проходим по каждому элементу текущего просматриваемого ряда узлов дерева
    tree.forEach(item => {
        sum += item.value;

        // Базовый случай: когда нет потомков, дальше некуда идти поэтому просто возвращаем
        if(!item.childrens) return sum;

        // Запускаем рекурсию
        sum += recursionTree(item.childrens);
    });

    return sum;
}

// Проход по дереву с помощью стэка
// По данному принципу реализована рекурсия, под капотом работает по этому принципу
function stackTree(tree) {
    let sum = 0;
    let stack = [];

    // Все родительские элементы дерева добавляем в стэк
    tree.forEach(item => stack.push(item));


    while(stack.length) {
        let item = stack.pop();

        sum += item.value;

        // Если у текущего элемента есть дочерние элементы, каждый из них добавляем  в стэк
        if(item.childrens) {
            item.childrens.forEach((children) => {
                stack.push(children);
            })
        }
    }

    return sum;
}

console.log(recursionTree(tree))