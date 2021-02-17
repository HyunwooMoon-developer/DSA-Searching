/* eslint-disable no-undef */
function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if(start > end){
        //if the start index is greater than the end index then clearly
        //the value hasn't been found so return -1
        return -1;
    }
    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    //if the item is equal to the value then have found the correct index
    if(item == value){
        return index;
    }
    //otherwise, recursively search in either the left half or right half of
    // the sorted array depending on whether the item was less than or greater than the value
    else if(item < value){
        return binarySearch(array, value, index +1 ,end);
    }
    else if(item > value){
        return binarySearch(array, value, start, index -1);
    }

}

module.exports = binarySearch;
// best case : O(1) : item is looking for is in the middle of the array
// worst case/ average case : O(log(n)) with each iteration, can cut the area have to search in half