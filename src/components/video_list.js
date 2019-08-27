import React from 'react';
import VideoListItem from './video_list_item';

class VideoList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            videos: []
        }

    }


    render(){
        const videoList = this.props.video.map((item) => {
            // console.log(item.snippet.thumbnails.default.url)
            return <VideoListItem key={item.etag} video={item}/>
        });

        return(
            <div>
                <ul className="col-md-4 list-group">
                    {videoList}
                </ul>
            </div>
        )
    }
}

// const VideoList = (props) => {
//     const videoItems = props.videos.map((item) => {
//         return <VideoListItem video={item} key={item.etag}>{item}</VideoListItem>
//     })
//        return(
//             <div>
//                {videoItems} 
//             </div>
//         )

// }

export default VideoList;