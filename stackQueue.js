function Stack() {
  var storage = [];
  var api = {};

  api.push = function(value) {
    storage.push(value);
  };

  api.pop = function() {
    return storage.pop() || -1;
  };

  api.size = function() {
    return storage.length;
  };

  return api;
}

function Queue() {
  var inStack = Stack();
  var outStack = Stack();
  var api = {};

  api.enqueue = function(value) {
    inStack.push(value);
  };

  api.dequeue = function() {
    if (outStack.size() === 0) {
      while (inStack.size() > 0) {
        outStack.push(inStack.pop());
      }
    }
    return outStack.pop();
  };

  return api;
};


var q = Queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
console.log(q.dequeue());//10
console.log(q.dequeue());//20
console.log(q.dequeue());//30
console.log(q.dequeue());//40
