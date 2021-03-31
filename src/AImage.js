import React, { Component } from "react";
import './ANum.css';
 
class App extends Component {
  render() {
    const color = this.props.myColor;

    const imgStyle = {
      backgroundColor: color,
      width: "50px",
      height: "50px"
    }
    const textStyle = {
      backgroundColor: color,
      margin: "5px",
      textAlign: "center"
    }

    return (
      <div style={textStyle}  className="page">
        <img src={this.props.imageSrc} style={imgStyle}/>
      </div>
    );
  }
}
export default App;    
 