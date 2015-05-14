/*
 *
 * Write a function to see if a binary tree ↴ is "superbalanced" (a new tree property we just made up).
 A tree is "superbalanced" if the difference between the depths of any two leaf nodes is no greater than one.
 *
 *
 */

function Tree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Tree.prototype.addNode = function(value) {
  var node = new Tree(value);
  if (this.left === null) {
    this.left = node;
  } else if (this.right === null) {
    this.right = node;
  } else {
    console.log("No positions left to add node on this tree");
    console.log("Try adding it to a child");
  }
}

Tree.prototype.isSuperBalanced = function() {
  var depths = {};
  var depth = 0;
  (function recurse(tree) {
    if (tree.left === null) {
      depths[depth] = depths[depth] || 0;
      depths[depth]++;
    } else {
      depth++;
      recurse(tree.left);
      depth--;
    }
    if (tree.right === null) {
      depths[depth] = depths[depth] || 0;
      depths[depth]++;
    } else {
      depth++;
      recurse(tree.right);
      depth--;
    }

  })(this);
  var numberOfDepths = Object.keys(depths);
  return numberOfDepths <= 2 || Math.abs(numberOfDepths[0] - numberOfDepths[1]) === 1
}

var tree = new Tree(10);
tree.addNode(20);
tree.addNode(20);
tree.left.addNode(20);
tree.left.addNode(20);

tree.right.addNode(20);
tree.right.addNode(20);
tree.right.right.addNode(20);
tree.right.right.addNode(20);
tree.right.right.right.addNode(20);

console.log(tree.isSuperBalanced());
