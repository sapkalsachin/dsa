class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Adds new node as a next to last node and makes it new tail
    push(val) {
        const newNode = new Node(val);

        if (!this.head) {
            this.head = newNode;
            this.size += 1;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode; //In JS, the tails works as a pointer bcz of pass by reference, since it is a non-primitive type
            this.size += 1;
        }
        return this;
    }

    //Removes last node and makes new tail as last-1
    pop() {
        if (!this.head) return undefined;

        let currentNode = this.head;
        let prevNode = currentNode;
        
        while (currentNode.next) {
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        this.tail = prevNode;
        this.tail.next = null;
        this.size -= 1;

        if (this.size === 0) {
            this.tail = null;
            this.head = null;
        }

        return currentNode;
    }

    // Removes head and returns
    shift() {
        if (!this.head) return undefined;

        const prevHead = this.head;
        this.head = prevHead.next;
        this.size -= 1;

        if (this.size === 0) {
            this.tail = null;
        }
        return prevHead;
    }

    //adds new head
    unshift(val) {
        const newNode = new Node(val);
        const prevHead = this.head;

        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            newNode.next = prevHead;
            this.head = newNode;
        }
        this.size += 1;

        return this;
    }

    //returns i th node, i = 0 to n-1
    get(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let counter = 0;
        let current = this.head;
        while (counter < index) {
            current = current.next;
            counter++;
        }

        return current;
    }

    //set's value for i th node
    set(index, val) {
        const foundNode = this.get(index);
        if (foundNode) {
            foundNode.val = val;
            return true;
        }
        return false;
    }

    //inserts new node in i th position
    insert(index, val) {
        if (index < 0 || index > this.size) return undefined;

        //if index is 0, make is head.. hence unshift
        if (index === 0) return !!this.unshift(val);

        //if index is last + 1... i.e. add new node....hence push
        if (index === this.size) return !!this.push(val);

        //else index is inbetween

        const newNode = new Node(val);
        const prevNode = this.get(index - 1);
        const newNext = prevNode.next;

        prevNode.next = newNode;
        newNode.next = newNext;
        this.size += 1;

        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.size) return false;

        if (index === 0) return this.shift();

        if (index === this.size - 1) return this.pop();

        const prevNode = this.get(index - 1);
        const toBeRemoved = prevNode.next;
        prevNode.next = toBeRemoved.next;
        this.size -= 1;

        return toBeRemoved;
    }
}
