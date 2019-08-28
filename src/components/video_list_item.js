import React from 'react';

class VideoListItem extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        const video = this.props.video;
        const onVideoSelect = this.props.onVideoSelect;
        console.log(video);

        return(
            <div>
                <li onClick={() => onVideoSelect(video)} className={`list-group-item`}>
                    <div className="video-list media">
                        <div className={`media-left`}>
                            <img src={video.snippet.thumbnails.default.url} className={`media-object`} />
                        </div>
                        <div className="media-body">
                            <div className="media-heading">
                                {video.snippet.title}
                            </div>
                        </div>
                    </div>
                </li>
            </div>
        )
    }
}

export default VideoListItem;