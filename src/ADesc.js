import React, { Component } from "react";
import AText from './AText.js';
import ANum from './ANum.js';

class Table extends Component {
  render() {
    
    const tableStyle = {
      width: "400px",
      textAlign: "center",
      borderCollapse: "collapse", 
    }

    return (
      <table style={tableStyle} >
        <tr >
          <td> 
            <AText myColor={'#ACC'} mytext={this.props.mytext} />
          </td>
          <td>
            <ANum myColor={'#AAE'} mynum={this.props.mynum}/> 
          </td>
        </tr>
      </table>
    );
  }
}
export default Table;