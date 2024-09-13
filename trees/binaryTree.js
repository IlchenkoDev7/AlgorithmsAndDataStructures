// Суть бинарного дерева в том, что новый элемент попадает сразу на своё место, что позволяет дереву быть уже отсортированным.
class BinaryTree {
    constructor() {
        this.root = null;
    }

    // Добавление элемента в дерево при том сразу с сортировкой
    add(value) {
        // проверяем есть ли базовый, если нет, создаём
        if(!this.root) {
            this.root = new TreeNode(value);
        } else {
            // Проходим по каждой ноде с самого начала, сравнивая значение нового элемента со значениями этих нод, чтобы докопать до того места, куда положить новый элемент
            let node = this.root;
            let newNode = new TreeNode(value);
    
            while(node) {
                // если значение больше следующая нода будет левой, иначе правой
                // Если мы дошли до конца ветки, дальше элемента в одну из сторон уже нет, завершаем цикл, оставляя при этом текущую ноду
                if(value > node.value) {
                    if(!node.right) {
                        break;
                    }
    
                    node = node.right;
                } else {
                    if(!node.left) {
                        break;
                    }
    
                    node = node.left;
                }
            }
    
            // К оставшейся ноде цепляем новый элемент
            // В зависимости от того, больше или меньше стыкуем вправо или влево
            if(value > node.value) {
                node.right = newNode;
            } else {
                node.left = newNode;
            }
        }
    }

    // Рекурсивная распечатка элементов дерева
    print(root = this.root) {
        // Базовый случай, когда переданного элемента не существует, просто возвращаем true, так как возврат элемента тут не обязателен, нужен просто console.log
        if(!root) return true;

        // Выводим значение
        console.log(root.value);

        // Рекурсивно запускаем левую часть от узла и правую
        // Значит сначала выведутся элементы левой части, потом правой
        this.print(root.left);
        this.print(root.right);
    }
}

// Узел дерева
class TreeNode {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

const binaryTree = new BinaryTree();
binaryTree.add(4);
binaryTree.add(3);
binaryTree.add(5);
binaryTree.add(2);
binaryTree.add(9);

binaryTree.print()