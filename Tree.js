class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}
class Tree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if(!this.root) {
            this.root = node
            return this
        }
        let temp = this.root
        while(true) {
            if(value == temp.value) return undefined
            if(value < temp.value) {
                if(!temp.left) {
                    temp.left = node
                    return this
                }
                temp = temp.left
            } else {
                if(!temp.right) {
                    temp.right = node
                    return this
                }
                temp = temp.right
            }
        }
    }

    contains(value) {
        if(!this.root) return false
        let temp = this.root
        while(temp != null) {
            if(temp.value == value) {
                return true
            } else if (temp.value > value) {
                temp = temp.left
            } else {
                temp = temp.right
            }
        }
        return false
    }

}

let tree = new Tree()
tree.insert(50)
tree.insert(20)
tree.insert(11)
tree.insert(26)
tree.insert(60)
tree.insert(52)
tree.insert(78)
console.log(tree.contains(20))
console.log(tree.contains(38))
console.log(tree)