//Implement a linked list with the same interface as this Java implementation:
//http://www.cs.cmu.edu/~adamchik/15-121/lectures/Linked%20Lists/linked%20lists.html
//
//After implementing a linked list, use the interface you created to create a Queue

//We use the module pattern here in order to make a private inner Node class which is inaccessible to our end user


function LinkedList() {
  function Node(value) {
    this.value = value;
    this.next = null;
  }

  var storage = {};
  storage.head = null;

  var api = {};
  api.addFirst = function(value) {
    var newNode = new Node(value);
    newNode.next = storage.head;
    storage.head = newNode;
  };

  api.addLast = function(value) {
    var newNode = new Node(value);
    if (storage.head === null) {
      storage.head = newNode;
    } else {
      var trav = storage.head;
      while (trav.next !== null) {
        trav = trav.next;
      }
      trav.next = newNode;
    }
  };

  api.insertAfter = function(value, key) {
    var newNode = new Node(value);
    var trav = storage.head;

    while (trav.next !== null && trav.value !== key) {
      trav = trav.next;
    }

    if (trav.value === key) {
      var temp = trav.next;
      newNode.next = temp;
      trav.next = newNode;
    }
  };

  api.beforeAfter = function(value, key) {
    var newNode = new Node(value);
    var trav = storage.head;

    while (trav.next !== null && trav.next.value !== key) {
      trav = trav.next;
    }

    if (trav.next && trav.next.value === key) {
      var temp = trav.next;
      newNode.next = temp;
      trav.next = newNode;
    }
  };

  api.removeTail = function() {
    var trav = storage.head;
    while (trav.next !== null) {
      if (trav.next.next === null) {
        var removed = trav.next.value;
        trav.next = null;
        return removed;
      } else {
        trav = trav.next;
      }
    }
    if (storage.head !== null) {
      var temp = storage.head.value;
      storage.head = null;
      return temp;
    }
    return -1;
  }
  return api;
}

//Example usage:
//
//var ll = LinkedList();
//ll.addFirst(10);
//ll.addFirst(20);
//ll.addLast(100);
//console.log(ll.removeTail()); //100
//console.log(ll.removeTail()); //10
//console.log(ll.removeTail()); //20

function Queue() {
  var api = {};
  var storage = new LinkedList();

  api.enqueue = function(value) {
    storage.addFirst(value);
  };

  api.dequeue = function() {
    return storage.removeTail();
  };

  return api;
}

var q = Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(40);
q.enqueue(60);

console.log(q); //{ enqueue: [Function], dequeue: [Function] }

console.log(q.dequeue()) //10
console.log(q.dequeue()) //20
console.log(q.dequeue()) //40
