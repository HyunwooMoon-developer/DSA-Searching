import React, { Component } from 'react';
import BinarySearch from './BinarySearch';
import data from './data';
import LinearSearch from './LinearSearch';

class App extends Component {
  state = {
    data: data,
  }
  render() {
    const {data} = this.state;
    return (
      <div>
        <LinearSearch data={data}/>
        <br />
        <br />
        <br />
        <BinarySearch data={data}/>
      </div>
    );
  }
}

export default App;