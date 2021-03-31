import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;
    const mytext = this.props.mytext;

    const textStyle = {
      backgroundColor: color,
      fontSize: "10px",
      fontfamily: 'Arial'
    }

    return (
      <div style={textStyle} className="page">
        {this.props.mytext}
      </div>
    );
  }
}
export default App;    
 