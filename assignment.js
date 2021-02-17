/* eslint-disable no-undef */
const BinarySearchTree = require('./binarySearchTree');
const binarySearch = require('./binarySearch');

// Q1. How many searches?

console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 8));
// four times


console.log(binarySearch([3,5,6,8,11,12,14,15,17,18], 16));
// five times
// and return -1