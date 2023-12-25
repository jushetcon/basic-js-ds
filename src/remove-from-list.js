const { NotImplementedError } = require('../extensions/index.js')

class ListNode {
	constructor(x) {
		this.value = x
		this.next = null
	}
}

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 */
function removeKFromList(l, k) {
	if (!l) {
		return null
	}

	const dummy = new ListNode(null)
	dummy.next = l

	let current = dummy

	while (current.next !== null) {
		if (current.next.value === k) {
			current.next = current.next.next
		} else {
			current = current.next
		}
	}

	return dummy.next
}

module.exports = {
	removeKFromList,
}
