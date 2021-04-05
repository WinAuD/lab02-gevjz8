import React, { Component } from"react"; 
import Article from "./Article"; 

class Page extends Component {   
  
  buildPage(inArray) {     
    /* Hier müssen Sie vervollständigen */ 

    let i;
    let outArray = [];
    for (i = 0; i < inArray.length; i++){
      let Article = inArray[i];
      outArray.push( <Article {...article} mynum = {i}></Article>);
    } 
    return outArray;   
  }   
  
  render() {     
    return ( 
      <div>
        {this.buildPage( this.props.content )};  
      </div>    
    );   
  } 
} 
export default Page;