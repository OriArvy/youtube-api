import React from 'react';
import Video from './Video';

const VideoList = ({ data, onVideoSelected }) => {
    return (
        <div className="video-list" style={{padding: 40}}> 
            { (data.length > 0) ? <h2>Your search results</h2> : "" } 
            {console.log(data.length)}
            <Video data={data} onVideoSelected={onVideoSelected} />
        </div>
    );
};

export default VideoList;