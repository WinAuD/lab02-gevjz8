import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;

    const textStyle = {
      backgroundColor: color,
      fontSize: "32px",
      textAlign: "center"
    }

    return (
      <div style={textStyle} className="page">
        {this.props.mynum}
      </div>
    );
  }
}
export default App;     
 