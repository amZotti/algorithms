//Write a function to find the 2nd largest element in a binary search tree

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

function secondLargestValue(tree, highest, secondHighest) {
  if (tree.value > highest) {
    secondHighest = highest;
    highest = tree.value
  } else if (tree.value > secondHighest) {
    secondHighest = tree.value;
  }

  //Go right if we have the option and do not go left, cutting the dataset to traverse in half
  if (tree.right !== null) {
    secondHighest = secondLargestValue(tree.right, highest, secondHighest);
  } else if (tree.left !== null) {
    secondHighest = secondLargestValue(tree.left, highest, secondHighest);
  }

  return secondHighest;

}

var tree = new Tree(10);
tree.addNode(15);
tree.addNode(20);
tree.left.addNode(23);
tree.left.addNode(25);

tree.right.addNode(27);
tree.right.addNode(28);
tree.right.right.addNode(2);
tree.right.right.addNode(4);
tree.right.right.right.addNode(220);

console.log(secondLargestValue(tree, 0, 0)); //28


//Basis: If you CAN go right, then that automatically discludes all nodes on the left side of the current subtree because by implication if the current root has a right subtree then the value of the current root becomes the boundary for what the minimum second largest element could be.
