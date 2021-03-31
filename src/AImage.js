import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;

    const textStyle = {
      backgroundColor: color,
      width: "5px",
      height: "5px"
    }

    return (
      <div style={textStyle} className="page">
        <img src={this.props.imageSrc}/>
      </div>
    );
  }
}
export default App;    
 