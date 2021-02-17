/* eslint-disable eqeqeq */
import React, { Component } from "react";

function indexOf(array, value){
    for (let i = 0 ; i < array.length ;i++){
        if(array[i] == value){
            
            return i;
        }

    }
    //if reach the end of the loop without finding the item then return -1,
    //indicating that the item wasn't found
    return `Try ${array.length} times but it's not exist`;
}

class LinearSearch extends Component {
    state={
        result : null,
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        let search = e.target.linear.value;
        console.log(search);

        this.setState({
          result: indexOf(this.props.data, search),
        });
      };
  render() {
    return (
        <div>
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="linear">Linear Search : </label>
        <input type="number" id="linear" name="linear" />
        <button type="submit">Submit</button>
      </form>
      <p>Linear search find out times : {this.state.result}</p>
      </div>
    );
  }
}

export default LinearSearch;
