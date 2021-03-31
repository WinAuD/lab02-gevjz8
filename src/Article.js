import React, { Component } from "react";
//import AImage from './AImage.js';
//import ADesc from './ADesc.js';

class Table extends Component {
  render() {
  const tableStyle = {
    width: "400px",
    textAlign: "center",
    borderCollapse: "collapse",
    border: "1px solid black"
  }

    return (
      <table style={tableStyle} >
        <tr >
          <th >Color</th>
          <th >Value</th>
        </tr>
        <tr>
          
        </tr>
      </table>
    );
  }
}
export default Table;