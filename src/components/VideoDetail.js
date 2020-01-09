import React from 'react';
import {Paper } from '@material-ui/core';
//import Heartshape from './Heartshape';
import Comments from './Comments';
import Like from './Like';
//import color from '@material-ui/core/colors/amber';

const VideoDetail=({ video })=>{
     if(!video) return <h2 style={{textAlign:'center',display:'center'}}>No Videos Found..</h2>
    //<div style={{height: '100%',width: '100%',display: 'flex',justifyContent: 'center',textAlign:'center'}}><b>No Videos Found</b></div>

    //console.log(video);

    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    return(
       <React.Fragment>
        {/* is an empty div */}
           <Paper elevation={3} style={{height:'50%' }}>
           <iframe frameBorder='0' height='68%' width='100%' style={{marginRight:'50%'}}  title='Video Player' src={videoSrc}></iframe>
           {/* </Paper> */}
           <Paper elevation={3} style={{padding:'15px'}}>
          <h3>{video.snippet.title} - {video.snippet.channelTitle}  
          {/* <Like/> */}
          </h3>
          <p>{video.snippet.channelTitle}</p>
          <div style={{marginRight:'5px', marginLeft: "790px" }}>  <Like/>
                 
        </div> 
               {/* is a praragraph prpoerty of material ui */}              
    {/* <Typography variant="h4">{video.snippet.channelTitle}</Typography> */}

   <br/>
   <Comments/>
           </Paper>
        </Paper>
            
       </React.Fragment>
    )
}
export default VideoDetail;