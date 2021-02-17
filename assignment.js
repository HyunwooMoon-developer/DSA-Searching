/* eslint-disable no-undef */
const BinarySearchTree = require("./binarySearchTree");
const binarySearch = require("./binarySearch");

// Q1. How many searches?

console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 8));
// four times

console.log(binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16));
// five times
// and return -1

// Q3. Find a book
// Implement your algorithm to find a book whose Dewey and book title is provided.
//binarySearch(dewey, title, start, end);

// Q4. Searching in a BST
//1) Given a binary search tree whose in-order and pre-order traversals are
//respectively 14 15 19 25 27 35 79 89 90 91 and 35 25 15 14 19 27 89 79 91 90.
// What would be its postorder traversal?

// A) post-order : 14 15 27 19 25 79 90 91 89 35

//2) The post order traversal of a binary search tree is 5 7 6 9 11 10 8. What is its pre-order traversal?

// A) pre-order : 8 6 5 7 10 9 11

// Q5. Implement different tree traversals
//create a binary search tree with the following dataset:
// 25 15 50 10 24 35 70 4 12 18 31 44 66 90 22.
//Then implement inOrder(), preOrder(), and postOrder() functions.

const testBST = new BinarySearchTree();

testBST.insert(25);
testBST.insert(15);
testBST.insert(50);
testBST.insert(10);
testBST.insert(24);
testBST.insert(35);
testBST.insert(70);
testBST.insert(4);
testBST.insert(12);
testBST.insert(18);
testBST.insert(31);
testBST.insert(44);
testBST.insert(66);
testBST.insert(90);
testBST.insert(22);

console.log(testBST.inOrder()); // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
console.log(testBST.preOrder()); //25, 15, 10,  4, 12, 24,18, 22, 50, 35, 31, 44,70, 66, 90
console.log(testBST.postOrder()); // 4, 12, 10, 22, 18, 24,15, 31, 44, 35, 66, 90,70, 50, 25

// Q6 Find the next commanding officer
// to distinguish between people of the same rank, those with more experience are on the left and those with less on the right (i.e., experience decreases from left to right).
//              Captain Picard
//            /                \
//      Commander Riker       Commander Data
//         /         \               \
//    Lt. Cmdr.   Lt. Cmdr.          Lt. Cmdr.
//     Worf        LaForge            Crusher
//      /                           /
//Lieutenant                  Lieutenant
//security-officer            Selar

//                    5
//                 /     \
//                3       6
//               / \       \
//              2   4       8
//             /           /
//            1           7

const commandBST = new BinarySearchTree();

commandBST.insert(5, "Captain Picard");
commandBST.insert(3, "Commander Riker");
commandBST.insert(6, "Commander Data");
commandBST.insert(2, "Lt. Cmdr. Worf");
commandBST.insert(4, "Lt. Cmdr. LaForge");
commandBST.insert(8, "Lt. Cmdr. Crusher");
commandBST.insert(1, "Lieutenant security-officer");
commandBST.insert(7, "Lieutenant Selar");

console.log(commandBST.bfs());

// Q7 Max profit
// If you had to buy shares in the company on a particular day,
// and sell the shares on a subsequent day, write an algorithm to work out what the maximum profit you could make would be.

// [128, 97, 121, 123, 98, 97, 105];


function maxProfit(array){
    let max = 0 ;
    let day = 1 ;
    for(let i = 0 ; i < array.length ; i++){
        let profit = array[i + 1] - array[i]
        if(profit > max){
            max = profit;
            day = day + 1;
        }
    }
    return `Max profit is ${max} in buy day ${day} and selling day ${day + 1}`;
}

const sharePrice = [128, 97, 121, 123, 98, 97, 105];

console.log(maxProfit(sharePrice));

