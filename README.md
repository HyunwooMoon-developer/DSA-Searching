# Searching Algorithms

## Linear Search

Look through an array 1-by-1 until find what are looking for.

## Binary Search

Faster search method, which only works on sorted array.
Binary Search works on the same principle of dividing the range in half each time.
This technique is common in algorithms; it is known as a divide and conquer approach.

## DFS(Depth-first search)

In a DFS start from a given node (usually the root) and traverse as far as down. When reach a node, which has no children to visit or all nodes on its path have been visited.

## Ordering

Each ordering will give the node values in a different order.

### In-order 

the algorithm that the left branch is visited, then the node itself is handled, then the right branch is visited.(Step left, Process Node, Step right)

Uses Cases : Working with BSTs


                               4
                            /     \
                           2       6
                         /   \    /  \
                        1     3  5    7

=> 1 - 2 - 3 - 4 - 5 - 6 - 7

### Pre-order

If the node is hanlded before the branches (Process Node, Setp left, Step right)

Uses Cases : Organizational chart, Directory structure, HTML, XML, JSON

                               a
                            /     \
                           b       c
                         /   \    /  \
                        d    e   f    g
    
=> a - b - d - e - c - f - g


### Post-order

If the node is handled after the branches (Step left, Step right, Process Node)

Uses Cases : Calculation relationship
Language Processors

                               a
                            /     \
                           b       c
                         /   \    /  \
                        d    e   f    g

=> d - e - b - f - g - c - a
 
## BFS(Breadth-first search)

Breadth-first search works across the row of a tree. So the top row will be handled 1st, then the 2nd row, and so on. The tree is visited level by level.
In order to carry out a BFS, need a 'first-in, first-out' queue so can store all the siblings in the queue and process them in the correct order.

