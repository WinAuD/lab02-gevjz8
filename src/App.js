import React, { Component } from "react";
import './App.css';

import Article from "./Article";
import Page from "./Page";
 
class App extends Component {
  articles=[
    { mytext: "New Banana found in Offenburg", imageSrc: "https://i.imgur.com/U1QeBwO.jpeg" },       { mytext: "Biggest Banana ever!", imageSrc: "https://i.imgur.com/n2fP4fH.jpg" },        
    { mytext: "Banana for scale!", imageSrc: "https://i.imgur.com/fxNl7Ca.png" }       
  ]     
  
  render() { 
    return ( 
      <div>
        <Page content={this.articles}></Page>
      </div>      
    );    
  }

  // // Aufgabe 2
  // render() {
  //   return (
  //     /* <div className="page">
  //       <h3>Hello, my world!</h3>
  //     </div> */

  //     <div>
  //       <Article imageSrc="https://i.imgur.com/U1QeBwO.jpeg" mytext="New banana found in Offenburg" mynum="1"/>
  //       <Article imageSrc="https://i.imgur.com/n2fP4fH.jpg" mytext="Biggest banana ever!" mynum="2"/>
  //     </div>
  //   );
  // }
}
export default App;     
