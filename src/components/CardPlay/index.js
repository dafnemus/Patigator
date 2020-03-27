import React, { useState, useRef, useEffect } from "react";
import { PlayCircleTwoTone, PauseCircleTwoTone } from '@ant-design/icons';
import "./styles.css";
import EditAndShare from "../edit-and-share";

    const CardPlay = (props) => {
    const audioPlayer = useRef(null);
    const [progress, setProgress] = useState(80);
    const [title, setTitle] = useState("Bad Bunny - Si la veo a tu mamá");
    const [countLikes, setCountLikes] = useState(0);
    const [countDislikes, setCountDislikes] = useState(0);
  
    useEffect(() => {
      console.log(progress, audioPlayer.current.duration);
    }, [progress]);
    
    const [isPlaying, setIsPlaying] = useState(false);
    const handleLike = (event) => {
      setCountLikes(countLikes +1)
    }
    const handleDislike = (event) => {
      setCountDislikes(countDislikes +1)
    }
  
    const toggleAudio = () => {
      if (isPlaying) {
        audioPlayer.current.pause();
        setIsPlaying(false);
  } else {
        audioPlayer.current.play();
        setIsPlaying(true);
      }
  }
    return (
      <div className="card-container">
        <img className="image" src="https://via.placeholder.com/80"></img>
        <div className="audio-title">
          <p>{title}</p>
          <span className="icon-play">{isPlaying?(<PauseCircleTwoTone style={{fontSize:"25px"}}/>) : (<PlayCircleTwoTone style={{fontSize:"25px"}}/>)}</span>
          <div className="audio">
            <div className="player">
            <div className="logo" onClick={toggleAudio}>
            
            </div>
          </div>
          <div className="progress">
            <div className="loading" style={{ width: `${progress}%` }} />
          </div>
        </div>
      </div>
  
      <div className="like-dislike">
          <span onClick={handleLike}><img src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/><small>{countLikes}</small></span>
          <span onClick={handleDislike}><img className="dislike" src="https://img.icons8.com/pastel-glyph/64/000000/facebook-like.png"/><small>{countDislikes}</small></span>
        <EditAndShare/>
        </div>
        
  
        <audio
          src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
          ref={audioPlayer}
          onTimeUpdate={e => {
            setProgress(
              (audioPlayer.current.currentTime * 100) /
                audioPlayer.current.duration
            );
          }}
        />
      </div>
    );
}

export default CardPlay;
