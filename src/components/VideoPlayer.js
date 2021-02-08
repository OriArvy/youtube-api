import React from 'react';
import _video from '../styles/_video.css'
const VideoPlayer = ({videoId}) => {
    if (!videoId) {
        return (
            <>
                <h2 className="video-text">Search for any video on youtube!</h2>
            </>
        );
    }

    return (
        <div className="containerer">
            <iframe
                title={videoId}
                 className="responsive-iframe"
                 src={`https://www.youtube.com/embed/${videoId}`}
                 allowFullScreen
            />
         </div>
    )
}

export default VideoPlayer;