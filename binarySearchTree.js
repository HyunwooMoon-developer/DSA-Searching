/* eslint-disable no-undef */
const Queue = require("./Queue");

/* eslint-disable no-undef */
class BinarySearchTree {
    constructor(key = null, value = null, parent = null) {
      this.key = key;
      this.value = value;
      this.parent = parent;
      this.left = null;
      this.right = null;
    }
    //If there is no existing tree, then the 1st item that insert will be inserted as the root of the tree.
    // If start with an existing tree then have to find the right place for the item that want to insert and then insert it.
    //average case is O(log(n))
    //best case is O(1)
    //worst case is O(n)
    insert(key, value) {
      //if the tree is empty then this key being inserted is the root node of the tree
      if (this.key == null) {
        this.key = key;
        this.value = value;
      }
      //if the tree already exists, then start at the root,
      //and compare it to the key you want to insert.
      //if the new key is less than the node's key
      //then the new node needs to live in the left-hand branch
      else if (key < this.key) {
        //if the existing nodes doesn't have a left child,
        //meaning that if the 'left' pointers is empty,
        //then can just instantiate and insert the new node
        //as the left child of that node, passing 'this' as the parent
        if (this.left == null) {
          this.left = new BinarySearchTree(key, value, this);
        }
        //if the node has an existing left child,
        //then recursively call the 'insert' method
        //so the node is added further down the tree
        else {
          this.left.insert(key, value);
        }
      }
      //similarly, if the new key is greater than the node's key
      //then do the same thing, but on the right-hand side
      else {
        if (this.right == null) {
          this.right = new BinarySearchTree(key, value, this);
        } else {
          this.right.insert(key, value);
        }
      }
    }
    //average case is O(log(n))
    //best case is O(1)
    //worst case is O(n)
    find(key) {
      //if the item is found at the root then return that value
      if (this.key == key) {
        return this.value;
      }
      //if the item is looking for is less than the root
      //then follow the left child
      //if there is an existing left child,
      //then recursively check its left and/or right child
      //until find the item
      else if (key < this.key && this.left) {
        return this.left.find(key);
      }
      //if the item is looking for is greater than the root
      //then follow the right hand
      //if there is an existing right child,
      //then recursively check its left and/or right child
      //until find the item
      else if (key > this.key && this.right) {
        return this.right.find(key);
      }
      //it has searched the tree and the item is not in the tree
      else {
        throw new Error("Key Error");
      }
    }
    remove(key) {
      if (this.key == key) {
        if (this.left && this.right) {
          //_findMin : to find the minimum value from the right subtree.
          //When are removing a node from the tree that has 2 children, want to replace the node with the smallest node from the right subtree.
          const successor = this.right._findMin();
          this.key = successor.key;
          this.value = successor.value;
          successor.remove(successor.key);
        }
        //if the node only has a left hand
        //then replace the node with its left child
        else if (this.left) {
          this._replaceWith(this.left);
        }
        //and simillarly if the node only has a right child
        //then replace it with its right child
        else if (this.right) {
          this._replaceWith(this.right);
        }
        //if the node has no children then
        //simply remove it and any references to it
        //by calling "this._replaceWith(null)"
        else {
          this._replaceWith(null);
        }
      } else if (key < this.key && this.left) {
        this.left.remove(key);
      } else if (key > this.key && this.right) {
        this.right.remove(key);
      } else {
        throw new Error("Key Error");
      }
    }
    _replaceWith(node) {
      if (this.parent) {
        if (this == this.parent.left) {
          this.parent.left = node;
        } else if (this == this.parent.right) {
          this.parent.right = node;
        }
  
        if (node) {
          node.parent = this.parent;
        }
      } else {
        if (node) {
          this.key = node.key;
          this.value = node.value;
          this.left = node.left;
          this.right = node.right;
        } else {
          this.key = null;
          this.value = null;
          this.left = null;
          this.right = null;
        }
      }
    }
  
    _findMin() {
      if (!this.left) {
        return this;
      }
      return this.left._findMin();
    }
    _findMax(){
        if(!this.right){
            return this;
        }
        return this.right._findMax();
    }
    // if there is a left-hand branch then recursively search the nodes there
    //then add the value at the current node to the array
    // recursively search the right-hand branch
    // O(n) each node needs to be visited
    dfs(values = []){
        if(this.left){
            values = this.left.dfs(values);
        }
        values.push(this.value);
        if(this.right){
            values = this.right.dfs(values);
        }
        return this.values;
    }
    //O(n) each node needs to be visited oncse.
    bfs(values = []){
        const queue = new Queue(); //Assuming a queue is implement
        queue.enqueue(this);
        while(queue.length){
            const node = queue.dequeue(); //remove from the queue
            values.push(node.value); //add that value from the queue to an array

            if(node.left){
                queue.enqueue(node.left) // add left child to the queue
            }
            if(node.right){
                queue.enqueue(node.right) // add right child to the queue
            }
        }
        return values
    }
    inOrder(values=[]){
        if(this.left){
            values = this.left.inOrder(values);
        }
        values.push(this.key)
        if(this.right){
            values = this.right.inOrder(values);
        }
        return values;
    }
    preOrder(values = []){
        values.push(this.key)
        if(this.left){
            this.left.preOrder(values)
        }
        if(this.right){
            this.right.preOrder(values);
        }
        return values;
    }
    postOrder(values = []){
        if(this.left){
            values = this.left.postOrder(values);
        }
        if(this.right){
            values= this.right.postOrder(values);
        }
        values.push(this.key);
        return values;
    }
  }
  
  module.exports = BinarySearchTree;