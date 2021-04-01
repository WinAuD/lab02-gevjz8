import React, { Component } from "react";
import './AText.css';
 
class AText extends Component {
  render() {
    const color = this.props.myColor;
    const mytext = this.props.mytext;

    const textStyle = {
      backgroundColor: color,
      fontSize: "10px",
      fontfamily: 'Arial',
      textAlign: "center"
    }

    return (
      <div className="pageAText">
        {this.props.mytext}
      </div>
    );
  }
}
export default AText;     
 