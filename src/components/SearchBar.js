import React from 'react';
import {Paper} from '@material-ui/core';
//import Comments from './Comments'
class SearchBar extends React.Component{
    state={
        searchTerm:'',
    }

handleChange=(event)=> this.setState(
        {
            searchTerm: event.target.value
        }
    );
 handleSubmit=(event)=>{
     this.setState({
      listOfComments:[]
     })
     const { searchTerm }=this.state;
     const { onFormSubmit }=this.props;
     onFormSubmit(searchTerm);
    event.preventDefault();
   
 }   


    render(){
       
        return(
            // <Paper elevation={6} style={{padding: '25px' }}>
            //     <form onSubmit={this.handleSubmit}>
            //         <TextField fullWidth label='Search...' onChange={this.handleChange} />
            //     </form>
            // </Paper>
            <Paper elevation={1} style={{padding: '10px' }}>
            <p style={{textAlign:'center'}}>
                <input placeholder="Search here..." style={{flex:'center',width:'320px'}} onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Search</button>
            </p>
           </Paper>
        )
    }
}

export default SearchBar;