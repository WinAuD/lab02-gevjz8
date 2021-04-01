import React, { Component } from "react";
import AText from './AText.js';
import ANum from './ANum.js';
import './ADesc.css';

class ADesc extends Component {
  render() {
    
    const tableStyle = {
      width: "400px",
      textAlign: "center",
      borderCollapse: "collapse", 
    }

    return (
      <table className="pageADesc">
        <tr >
          <td> 
            <AText mytext={this.props.mytext}/>
          </td>
          <td>
            <ANum mynum={this.props.mynum}/> 
          </td>
        </tr>
      </table>
    );
  }
}
export default ADesc; 