import React from 'react';

import { Paper } from '@material-ui/core';

const VideoItems=({video, onVideoSelect })=>{
    return(
       
         <Paper style={{ display: "flex", alignItems: "center", cursor: "pointer" }} onClick={() => onVideoSelect(video)} >
           <img style={{margin:'20px' }} alt="thumbnail" src={video.snippet.thumbnails.medium.url}></img>
           <br/>
             {/*<Typography variant="h5" >{video.snippet.title}</Typography>*/}
    <h5><b>{video.snippet.title}</b></h5>
    <br/>
            </Paper>
      
    );
}

export default VideoItems;