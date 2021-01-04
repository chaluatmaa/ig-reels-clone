import React, { useState, useRef } from 'react'
import VideoHeader from './VideoHeader'
import './VideoCard.css'
import VideoFooter from "./VideoFooter"

function VideoCard( {url,likes,shares,channel,avatarSrc,song} ) {

    const [isVideoPlaying,setIsVideoPlaying] = useState(false);
    const videoref = useRef(null);

    const onVideoPress = () => {
        if(isVideoPlaying)
        {
            // STOP THE VIDEO
            videoref.current.pause();
            setIsVideoPlaying(false);
        }

        else
        {
            // PLAY TH VIDEO
            videoref.current.play();
            setIsVideoPlaying(true);
        }
    }

    return (
        <div className="videoCard">
            <VideoHeader />
            <video ref={videoref} onClick={onVideoPress} className="videoCard__player" src={url} alt="ig-reel-video" loop/>
            <VideoFooter 
                channel={channel}
                likes={likes}
                shares={shares}
                avatarSrc={avatarSrc}
                song={song}
            />
        </div>
    )
}

export default VideoCard
