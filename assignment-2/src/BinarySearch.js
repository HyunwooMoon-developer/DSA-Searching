/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
/* eslint-disable no-redeclare */
import React, { Component } from "react";

function binarySearch(array, value, start, end, count = 0) {
  var start = start === undefined ? 0 : start;
  var end = end === undefined ? array.length : end;
  count++;

  if (start > end) {
    //if the start index is greater than the end index then clearly
    //the value hasn't been found so return -1
    return `Try ${count - 1} times but it's not exist`;
  }
  const index = Math.floor((start + end) / 2);
  const item = array[index];

  console.log(start, end);
  //if the item is equal to the value then have found the correct index
  if (item == value) {
    return count;
  }
  //otherwise, recursively search in either the left half or right half of
  // the sorted array depending on whether the item was less than or greater than the value
  else if (item < value) {
    return binarySearch(array, value, index + 1, end, count);
  } else if (item > value) {
    return binarySearch(array, value, start, index - 1, count);
  }
}

class BinarySearch extends Component {
  state = {
    result: null,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    let search = e.target.binary.value;
    console.log(search);

    const sortData = this.props.data.sort((a, b) => {
      return a - b;
    });
    console.log(sortData);
    this.setState({
      result: binarySearch(sortData, search),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="binary">Binary Search : </label>
          <input type="number" id="binary" name="binary"></input>
          <button type="submit">Submit</button>
        </form>
        <p>Binary search find out times : {this.state.result}</p>
      </div>
    );
  }
}

export default BinarySearch;
