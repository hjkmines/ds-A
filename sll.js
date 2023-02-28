create a method called findOdd(), 2 -> 4 -> 6 -> 9 -> 12

class Node {
  constructor(val) {
    this.val = value;
    this.next = next;
  }
}

class SLL {
  constructor() {
  this.head = null
	this.tail = null
	this.length = 0
  }
  
  findOdd() {
    //edge case - if head is empty, SLL is empty;
    
    //traverse through the LL to get a value that is odd
    //start with the head and get the .next value
    //keep traversing through with the condition - while loop
    //return the (this.node.value) node value of 9; no need to remove
    //dummy value to hold temp
    let oddNumber = 0
     let currentNode = this.head;
    
    while (currentNode.next) {
      if (currentNode.value % 2 === 1) {
       	oddNumber = currentNode.value
      }
      current = current.next
		}
     return oddNumber   
  }
}


