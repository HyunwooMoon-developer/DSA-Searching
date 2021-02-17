function indexOf(array, value){
    for (let i = 0 ; i < array.length ;i++){
        if(array[i] == value){
            return i;
        }
    }
    //if reach the end of the loop without finding the item then return -1,
    //indicating that the item wasn't found
    return -1;
}

// best case : O(1) : the value is at the start of the array
// worst case : O(n) : have to search through the entire array to find that a key doesn't exist.
// Average case : O(n) : take place when the item is looking for is i n the center of the array

indexOf();
