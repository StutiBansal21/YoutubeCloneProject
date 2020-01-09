import React from "react";
import { Component } from "react";
import {TextField} from '@material-ui/core';

class Comments extends Component {
  constructor(props) {
    super();
    this.state = {
      name: '',
     buttonValue:'',
       comment: '' ,
       listOfComments:[]
    };
  }
handleChangeOfName=event=>{
  this.setState({
    name:event.target.value,
  })
}

handleChangeOfComment=event=>{
  this.setState({
    comment:event.target.value,
  });
 // console.log(this.state.comment);
};
addComment=()=>{
  this.setState({
    listOfComments:[...this.state.listOfComments,<div><b>{this.state.name}</b><br/>{this.state.comment}</div>],
    comment:"",
    name:""
  })
}
cancel=()=>{
    this.setState({
     name:"",
     comment:""
    })
 
  }
  render() {
        return (
      <div>
        <p>
        <h3>Comments</h3>
        </p>
        <TextField style={{marginRight:'20px',marginBottom:'10px',width:'320px'}} 
        type="text" onChange={event=>this.handleChangeOfName(event)}
     value={this.state.name}
     placeholder="Enter name..."
     /> 

     <TextField style={{marginBottom:'10px',width:'320px'}} 
     type="text" onChange={event=>this.handleChangeOfComment(event)}
     value={this.state.comment}
     placeholder="Enter comment..."
     />
     <br/>
     <div style={{textAlign:'right'}}>
     <button style={{marginRight:'10px'}} onClick={this.addComment}>Comment</button>
     <button onClick={this.cancel}>Cancel{this.state.buttonValue}</button>
     </div>
 

{this.state.listOfComments.map(Elm=>(
  <p><i class="material-icons">person</i> {Elm}</p>
 
))}

      </div>
    );
  }
}
export default Comments