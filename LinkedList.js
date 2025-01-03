class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Linkedlist {
    constructor(value) {
        const node = new Node(value)
        this.head = node
        this.tail = node
        this.length = 1
    }
    // Pushing value to Lined List

    push(value) {
        const node = new Node(value)
        if(!this.length) {
            this.head = node
            this.tail = node
        }

        this.tail.next = node
        this.tail = node
        this.length++
        return this
    }

    // Pop element from linked list

    pop() {
        if(! this.length) return undefined
        let temp = this.head
        if(this.length == 1) {
            this.head = null
            this.tail = null
            this.length--
            return temp
        } else {
            while(temp.next != this.tail) {
                temp = temp.next
            }
            let result = temp.next
            temp.next = null
            this.tail = temp
            this.length--
            return result
        }
    }

    // unshift , add new element at beginning of linked list

    unshift(value) {
        const node = new Node(value)
        if(!this.length) {
            this.head = node
            this.tail = node
        } else {
            node.next = this.head
            this.head = node
        }
        this.length++
        return this
    }

    // shift, remove element from beginning of linked list

    shift() {
        let temp = this.head
        if(!this.length) {
            this.head = null
            this.tail = null
            this.length--
            return temp
        }

        this.head = temp.next
        temp.next = null
        this.length--
        return this
    }

    //get, get element at a particular index 

    get(index){
        if(index < 0 || index >=this.length) return undefined
        let temp = this.head
         for(let i = 0; i < index; i++) {
            temp = temp.next
         }
         return temp
    }

    //

}

let ll = new Linkedlist(4)
ll.push(3)
ll.push(6)
ll.pop()
ll.unshift(9)
ll.unshift(10)
ll.shift()
console.log(ll.get(2))
console.log(ll)