import React, { Component } from "react";
import './ANum.css';
 
class ANum extends Component {
  render() {
    const color = this.props.myColor;

    const textStyle = {
      backgroundColor: color,
      fontSize: "32px",
      textAlign: "center"
    }

    return (
      <div className="pageANum">
        {this.props.mynum}
      </div>
    );
  }
}
export default ANum;      
 