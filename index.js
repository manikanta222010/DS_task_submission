class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}


class LinkedList {
    constructor() {
        this.head = null;
    }

    add(data) {
        let node = new Node(data);

        if (this.head == null) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next != null) {
                current = current.next;
            }

            current.next = node;
        }
    }

    insertAt(data, index) {
        let node = new Node(data);

        if (index == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        node.next = current.next;
        current.next = node;
    }

    removeFrom(index) {
        let current = this.head;
        if (index === 0) {
            this.head = current.next;
            current = null;
            return;
        }

        let prev = null;
        for (let i = 0; i < index; i++) {
            prev = current;
            current = current.next;
        }

        prev.next = current.next;
        current = null;
    }

    findIndex(searchElement) {
        let count = 0;
        let current = this.head;

        while (current != null) {
            if (current.data == searchElement) {
                return count;
            }
            count++;
            current = current.next;
        }

        return -1;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        let newp = null;

        while (current != null) {
            newp = current.next;
            current.next = prev;
            prev = current;
            current = newp;
        }

        this.head = prev;
    }

    findMiddle() {
        let slow = this.head;
        let fast = this.head;

        while (fast.next != null && fast.next.next != null) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow.data;
    }

    insertBefore(data, index) {
        let node = new Node(data);

        if (index == 0) {
            node.next = this.head;
            this.head = node;
            return;
        }

        let current = this.head
        for (let i = 1; i < index; i++) {
            current = current.next
        }
        let temp = current.next
        current.next = node
        node.next = temp
    }

    insertAfter(data, index){
        let node = new Node(data);

        let current = this.head
        for (let i = 1; i <= index; i++) {
            current = current.next
        }
        let temp = current.next
        current.next = node
        node.next = temp
    }

    removeByData(data)  {
        let count=0
        let current = this.head
        let prev=null
        while(current !=null){
            if(current.data===data){
                if(count===0){
                    this.head = current.next;
                    current = null;
                    return;
                }
                prev.next=current.next
                current.next=null
            }
            count++
            prev=current
            current=current.next
        }
        return -1
    }

    isEmpty(){
        if(this.head===null){
            return 1
        }
        return 0
    }

    size(){
        let current = this.head
        let count=0
        while(current!=null){
            current=current.next
            count++
        }
        return count
    }

    print() {
        let current = this.head;
        let array = [];

        while (current != null) {
            array.push(current.data);
            current = current.next;
        }

        console.log(array.join(' -> '));
    }

    isPalidrome(){
        let first = this.head
        let second = this.head
        let second_head=null
        while (true){
            second=second.next.next
            if(second.next===null){
                second_head=first.next.next
                break
            }
            if(second===null){
                second_head=first.next
                break
            }
            first=first.next
        }
        
        //reverse second sub list
        let prev=null
        let current=second_head
        while(current!=null){
            let new_head=current.next
            current.next=prev
            prev=current
            current=new_head
        }
        second=prev
        first=this.head
        
        while(second!=null){
            if(first.data!==second.data){
                return 0
            }
            first=first.next
            second=second.next
        }
        return 1
    }
}

let list = new LinkedList();
this.head = null;

list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);

list.print();

// list.removeFrom(1);

// list.print();

// list.reverse();

// list.print();

// list.insertBefore(9, 2);

// list.print()

// list.insertAfter(9, 2);

// list.print()

// list.removeByData(3)

// list.print()

// console.log(list.isEmpty())

// console.log(list.size())

console.log(list.isPalidrome())
