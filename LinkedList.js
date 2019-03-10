function LinkedList() {
	this.head = null;
	this.tail = null;
}

function Node(value, next, prev) {
	this.value = value;
	this.next = next;
	this.prev = prev;
}

LinkedList.prototype.addToHead = function(value) {
	const newNode = new Node(value, this.head, null);
	if (this.head) this.head.prev = newNode;
	else this.tail = newNode;
	this.head = newNode;
};

LinkedList.prototype.addToTail = function(value) {
	const newNode = new Node(value, null, this.tail);
	if (this.tail) this.tail.next = newNode;
	else this.head = newNode;
	this.tail = newNode;
};

LinkedList.prototype.removeHead = function() {
	// if list is empty
	if (!this.head) return null;

	// if list is not empty
	const val = this.head.value;

	// the new head node is the current head node.next
	this.head = this.head.next;

	// if this head is not null
	if (this.head) {
		this.head.prev.next = null;

		this.head.prev = null;
	} else this.tail = null;
	return val;
};

LinkedList.prototype.removeTail = function() {
	// if list is empty
	if (!this.tail) return null;
	// if list is not empty
	const val = this.tail.value;

	// the new tail node is the current tail node.prev
	this.tail = this.head.prev;

	// if tail exists is not null
	if (this.tail) {
		this.tail.next.prev = null;
		this.tail.next = null;
	} else this.tail = null;
	return val;
};

LinkedList.prototype.search = function(searchValue) {
	let currentNode = this.head;
	while (currentNode) {
		if (currentNode.value === searchValue) return currentNode.value;
		currentNode = currentNode.next;
	}
	return null;
};

LinkedList.prototype.indexOf = function(searchValue) {
	let currentNode = this.head;
	let counter = 0;
	const arr = [];
	while (currentNode) {
		if (searchValue === currentNode.value) arr.push(counter);
		counter++;
		currentNode = currentNode.next;
	}
	return arr;
};
