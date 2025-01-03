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
        if (!this.root) {
            this.root = new Node(value);
            return this;
        }
        return this.#rinsert(value, this.root);
    }

    #rinsert(value, node) {
        if (!node) return new Node(value);
        if (value < node.value) {
            node.left = this.#rinsert(value, node.left);
        } else if (value > node.value) {
            node.right = this.#rinsert(value, node.right);
        }
        return node; // Return the current node to maintain tree structure
    }
    contains(value, node = this.root) {
        if(node == null) return false
        if(node.value == value) return true
        if(value < node.value) {
            return this.contains(value, node.left)
        } else {
            return this.contains(value, node.right)
        }
    }

    delete(value) {
        this.root = this.#rdelete(value, this.root)
    }

    getMinVal(node) {
        if (!node) return null;
        while(node.left != null) {
            node = node.left
        }
        return node.value
    }

    #rdelete(value, node) {
        if(!node) return null
        if(value < node.value) {
            node.left = this.#rdelete(value, node.left)
        } else if (value > node.value) {
            node.right = this.#rdelete(value, node.right)
        } else {
            if(node.left == null && node.right == null) {
                node = null
            } else if(node.left == null) {
                node = node.right
            } else if(node.right == null) {
                node = node.left
            } else {
                let minVal = this.getMinVal(node.right)
                node.value = minVal
                node.right = this.#rdelete(minVal, node.right)
            }
        }
        return node

    }

    printTree(node = this.root, space = 0, levelGap = 5) {
        if (!node) return;
        space += levelGap;
        this.printTree(node.right, space);
        console.log(" ".repeat(space - levelGap) + node.value);
        this.printTree(node.left, space);
    }

    // Traversal 
    
}

const tree = new Tree()
tree.insert(50)
tree.insert(20)
tree.insert(11)
tree.insert(26)
tree.insert(60)
tree.insert(52)
tree.insert(78)
console.log("Tree before deletion:");
tree.printTree();

console.log("Contains 20:", tree.contains(20)); // Output: true
console.log("Contains 38:", tree.contains(38)); // Output: false

tree.delete(20);
console.log("\nTree after deleting 20:");
tree.printTree();

tree.delete(50);
console.log("\nTree after deleting 50:");
tree.printTree();

