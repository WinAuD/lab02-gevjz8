import React, { Component } from "react";
import './App.css';

import Article from "./Article";
 
class App extends Component {
  render() {
    return (
      /* <div className="page">
        <h3>Hello, my world!</h3>
      </div> */

      <div>
        <Article imageSrc="https://i.imgur.com/U1QeBwO.jpeg" mytext="New banana found in Offenburg" mynum="1"/>
        <Article imageSrc="https://i.imgur.com/n2fP4fH.jpg" mytext="Biggest banana ever!" mynum="2"/>
      </div>
    );
  }
}
export default App;    
