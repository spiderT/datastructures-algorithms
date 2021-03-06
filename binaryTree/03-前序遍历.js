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

    function preOrderTraversNode(node, callback) {
        if (node !== null) {
            callback(node.key)
            preOrderTraversNode(node.left, callback)
            preOrderTraversNode(node.right, callback)
        }
    }


    this.preOrderTraverse = function (callback) {
        preOrderTraversNode(root, callback)
    }

}

const arr = [3, 14, 6, 17, 11, 5, 9, 13]

const binaryTree = new BinaryTree()

arr.forEach(function (key) {
    binaryTree.insert(key)
})

let callback = function (key) {
    console.log(key)
}

binaryTree.preOrderTraverse(callback)
