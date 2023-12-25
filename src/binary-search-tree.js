const { NotImplementedError } = require('../extensions/index.js')

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class TreeNode {
	constructor(data) {
		this.data = data
		this.left = null
		this.right = null
	}
}

class BinarySearchTree {
	constructor() {
		this.rootNode = null
	}

	root() {
		return this.rootNode
	}

	add(data) {
		this.rootNode = this._addNode(this.rootNode, data)
	}

	_addNode(node, data) {
		if (node === null) {
			return new TreeNode(data)
		}

		if (data < node.data) {
			node.left = this._addNode(node.left, data)
		} else if (data > node.data) {
			node.right = this._addNode(node.right, data)
		}

		return node
	}

	has(data) {
		return this._hasNode(this.rootNode, data)
	}

	_hasNode(node, data) {
		if (node === null) {
			return false
		}

		if (data === node.data) {
			return true
		} else if (data < node.data) {
			return this._hasNode(node.left, data)
		} else {
			return this._hasNode(node.right, data)
		}
	}

	find(data) {
		return this._findNode(this.rootNode, data)
	}

	_findNode(node, data) {
		if (node === null) {
			return null
		}

		if (data === node.data) {
			return node
		} else if (data < node.data) {
			return this._findNode(node.left, data)
		} else {
			return this._findNode(node.right, data)
		}
	}

	remove(data) {
		this.rootNode = this._removeNode(this.rootNode, data)
	}

	_removeNode(node, data) {
		if (node === null) {
			return null
		}

		if (data < node.data) {
			node.left = this._removeNode(node.left, data)
		} else if (data > node.data) {
			node.right = this._removeNode(node.right, data)
		} else {
			if (node.left === null && node.right === null) {
				return null
			} else if (node.left === null) {
				return node.right
			} else if (node.right === null) {
				return node.left
			} else {
				let minValue = this._findMinValue(node.right)
				node.data = minValue
				node.right = this._removeNode(node.right, minValue)
			}
		}

		return node
	}

	_findMinValue(node) {
		while (node.left !== null) {
			node = node.left
		}
		return node.data
	}

	min() {
		if (this.rootNode === null) {
			return null
		}

		let currentNode = this.rootNode
		while (currentNode.left !== null) {
			currentNode = currentNode.left
		}

		return currentNode.data
	}

	max() {
		if (this.rootNode === null) {
			return null
		}

		let currentNode = this.rootNode
		while (currentNode.right !== null) {
			currentNode = currentNode.right
		}

		return currentNode.data
	}
}

module.exports = {
	BinarySearchTree,
}
