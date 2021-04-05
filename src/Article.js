import React, { Component } from "react";
import AImage from './AImage.js';
import ADesc from './ADesc.js';
import './Article.css';

class Table extends Component {
  render() {

    const imageSrc = this.props.imageSrc;
    const tableStyle = {
      width: "400px",
      textAlign: "center",
      borderCollapse: "collapse",
      border: "1px solid black"
    }

    return (
      <table className="page" >
        <tr >
          <td className="page"><AImage myColor={'#ffe066'} imageSrc={this.props.imageSrc}/></td>
          <td className="page"><ADesc mytext={this.props.mytext} mynum={this.props.mynum}/></td>
        </tr>
      </table>
    );
  }
}
export default Table;  