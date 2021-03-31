import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;

    const textStyle = {
      backgroundColor: color,
      fontSize: "10px",
      fontfamily: 'Arial'
    }

    return (
      <div style={textStyle} className="page">
        Text
      </div>
    );
  }
}
export default App;    
 