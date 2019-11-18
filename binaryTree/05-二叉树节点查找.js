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

    //求最小值
    function minNode(node) {
        if (node) {
            while (node && node.left) {
                node = node.left
            }
            return node.key
        }
        return null
    }

    //求最大值
    function maxNode(node) {
        if (node) {
            while (node && node.right) {
                node = node.right
            }
            return node.key
        }
        return null
    }

    //查找任意值
    function searchNode(node, key) {
        if (node === null) {
            return false
        }
        if (key < node.key) {
            return searchNode(node.left, key)
        } else if (key > node.key) {
            return searchNode(node.right, key)
        } else {
            return true
        }
    }


    this.min = function () {
        return minNode(root)
    }

    this.max = function () {
        return maxNode(root)
    }

    this.search = function (key) {
        return searchNode(root, key)
    }

}

const arr = [23, 14, 6, 17, 11, 25, 9, 13]

const binaryTree = new BinaryTree()

arr.forEach(function (key) {
    binaryTree.insert(key)
})


console.log(binaryTree.min())
console.log(binaryTree.max())
console.log(binaryTree.search(17))
