import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((item) => {
        return <VideoListItem video={item} key={item}>{item}</VideoListItem>
    })
       return(
            <div>
               {videoItems} 
            </div>
        )

}

export default VideoList;