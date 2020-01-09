import React from 'react';
class Like extends React.Component{
    state={
        icon: 'favorite_border',
        color: 'black'
    }
    handlecolor=(event)=> {
        var value = this.state.icon;
        
        if(value === 'favorite_border') {
            this.setState({icon: 'favorite', color: 'red'});
        } else {
            this.setState({icon: 'favorite_border', color: 'black'});
        }
    }
    render(){
    return (
       <h6><i style={{cursor:'pointer', color: this.state.color}} onClick={this.handlecolor} class="material-icons" >{this.state.icon}</i> 
       </h6>
       
    )
    }}


    export default Like;