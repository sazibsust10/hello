
import React, { Component, createRef } from "react";

class InputBox extends Component {
    constructor() {
      super();
      this.state = {
        value:'',
      };
      console.log("Inside inputBox Constructor");
    }
  
    handleChange = (e) =>{ 
        this.setState({value: e.target.value});
        console.log("Here:", this.state.value);
    }

    saveValue = (e) => {
       console.log('Current value: ', this.state.value);
    }
    render() {
  
      return (
        <div>
                <input type="text" value={this.state.value} onChange={this.handleChange}></input>
                <button onClick={this.saveValue}>Save</button>
            
        </div>
              );
    }
  }
export default InputBox;

