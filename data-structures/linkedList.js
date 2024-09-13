// LinkedList - список, в котором каждый элемент хранит в себе ссылку на следующий элеменет

class LinkedList {
    // В конструкторе создаём поле с базовым элементом и размером всего списка
    constructor(node = null) {
        this.root = node;
        this.size = 0;
    }
    
    // Добавление элемента
    add(value) {
        // если базовый элемент пуст, делаем элемент базовым
        if(this.root === null) {
            this.root = new Node(value);
            this.size += 1;
            return;
        }

        // Если это уже не первый элемент, надо пройтись до самой последней ноды в текущем состоянии списка, чтобы этой последней ноде в качестве next присвоить новую ноду
        let node = this.root;
        while(node.next) {
            node = node.next;
        }
        let newNode = new Node(value);
        node.next = newNode;
        this.size += 1;
    }

    // Получение размера списка
    getSize() {
        return this.size;
    }

    // Вывод всех значений списка в консоль
    print() {
        if(this.getSize() === 0) return;

        // Проходим по всем нодам в цикле и выводим значение каждой
        let node = this.root;
        while(node) {
            console.log(node.value);
            node = node.next;
        }
    }

    // Получение конкретного элемента списка
    // Бессмысленный метод, но для закрепления работы с деревом был необходим
    get(value) {
        if(this.getSize() === 0) return;

        let node = this.root;
        
        // Также проходимся по списку проверяя значение каждой ноды на совпадение с искомым значением
        while(node.value !== value) {
            if(!node.next && node.value !== value) {
                return -1;
            }
            node = node.next
        }

        return node;
    }
}

// Класс ноды
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

const list = new LinkedList(new Node(3));
list.add(10);
list.add(2);
list.add(7);
list.add(1);

// list.print()

console.log(list.get(2));