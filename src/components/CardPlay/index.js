import React, { useState, useRef, useEffect } from "react";
import { PlayCircleTwoTone, PauseCircleTwoTone,LikeFilled, DislikeFilled, MoreOutlined } from '@ant-design/icons';
import "./styles.css";

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
        <img className="image" src="https://via.placeholder.com/70"></img>
          <div className="audio-title">
          {/* le di una clase al titulo para darle un ancho en el css */}
            <p className="title">{title}</p>
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
      {/* meti cada icono con el contador en un contenedor asi le das un display: flex y lo direccionar como column para que quede uno abajo del otro y no uno al lado medio rancio */}
        <div className="container-icon">
          <span className="like" onClick={handleLike}>
          <LikeFilled />
          </span>
          <span>{countLikes}</span>
        </div>
          
        <div className="container-icon">
          <span className="dislike" onClick={handleDislike}>
          <DislikeFilled />
          </span>
          <span>{countDislikes}</span>
        </div>
      </div>
      <div className="More">
        <span><MoreOutlined /></span>
      </div>

      <audio
        src="https://www.youtube.com/watch?v=3lL8oeDO2ZM"
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