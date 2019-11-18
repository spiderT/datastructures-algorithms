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
        }

    }

    this.remove = function (key) {
        root = removeNode(root, key)
    }


}

const arr = [23, 14, 6, 17, 11, 25, 9, 13]

const binaryTree = new BinaryTree()

arr.forEach(function (key) {
    binaryTree.insert(key)
})


binaryTree.remove(6)
