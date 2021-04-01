import React, { Component } from "react";
import './AImage.css';
 
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
      <div className="pageAImage">
        <img src={this.props.imageSrc} style={imgStyle}/>
      </div>
    );
  }
}
export default App;     
 