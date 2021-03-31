import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;

    const textStyle = {
      backgroundColor: color,
      fontSize: "32px"
    }

    return (
      <div style={textStyle} className="page">
        1
      </div>
    );
  }
}
export default App;    
 