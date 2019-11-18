function BinaryTree() {
    function Node(key) {
        this.key = key
        this.left = null
        this.right = null
    }


    function insertNode(node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode
            } else {
                insertNode(node.left, newNode)
            }
        } else {
            if (node.right === null) {
                node.right = newNode
            } else {
                insertNode(node.right, newNode)
            }
        }
    }

    let root = null

    this.insert = function (key) {
        let newNode = new Node(key)
        if (root === null) {
            root = newNode
        } else {
            insertNode(root, newNode)
        }
    }

    function findMinNode(node) {
        if (node) {
            while (node && node.left) {
                node = node.left
            }
            return node
        }
    }


    function removeNode(node, key) {
        if (node === null) {
            return null
        }
        if (key < node.key) {
            node.left = removeNode(node.left, key)
            return node
        } else if (key > node.key) {
            node.right = removeNode(node.right, key)
            return node
        } else {
            if (node.left === null && node.right === null) {
                node = null
                return node
            }

            if (node.left === null) {
                node = node.right
                return node
            } else if (node.right === null) {
                node = node.left
                return node
            }

            var aux = findMinNode(node.right)
            node.key = aux.key
            node.right = removeNode(node.right, aux.key)
            return node
        }

    }

    this.remove = function (key) {
        root = removeNode(root, key)
    }


}

const arr = [13, 14, 6, 17, 11, 25, 9, 3]

const binaryTree = new BinaryTree()

arr.forEach(function (key) {
    binaryTree.insert(key)
})


binaryTree.remove(17)
