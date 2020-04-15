import React, { useState, useRef, useEffect } from "react";
import { Slider } from 'antd'
import { ReactComponent as Like } from './img/Like.svg'
import { ReactComponent as Dislike } from './img/Dislike.svg'
import { ReactComponent as PlayIcon } from './img/play-circle-o.svg'
import { ReactComponent as PauseIcon } from './img/pause-circle-o.svg'
import EditAndShare from "../edit-and-share";
import "./styles.css";

const CardPlay = (props) => {

  const [player] = useState(props)
  const audioPlayer = useRef(null);
  const [audioSource, setAudioSource] = useState("");
  const [cover, setCover] = useState("https://via.placeholder.com/75");
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState("");
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    
    setTitle(player.title)
    setCountLikes(player.thumbsUp)
    setCountDislikes(player.thumbsDown)
    setCover(player.cover)
    setAudioSource(player.audioSource)

  }, [player, title, countLikes, countDislikes, cover,]);
  
  const handleLike = (e) => {setCountLikes(countLikes + 1) };
  const handleDislike = (e) => {setCountDislikes(countDislikes + 1) };
  const toggleAudio = () => {

    if (isPlaying) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    } else {
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  }
  const onChange = value => {
    setProgress(value);
  };
  
  return (
    <div className="card-container">
      <img className="image" src={cover} alt={title}/>
      <div className="player">
        <p className="audio-title">{title}</p>
        <div className="audio-controls">
          <div className="icon-play" onClick={toggleAudio}>
              {isPlaying ? (<PauseIcon />) : (<PlayIcon />)}
          </div>
          <Slider className="progress"
              min={0}
              max={100} //duracion (?
              onChange={onChange}
              value={progress}
              tipFormatter={null}
            />
          <time className="elapsed">{progress.toFixed(2)}</time>
        </div>
      </div>
      <div className="like-dislike">
        <span onClick={handleLike}><Like /><small>{countLikes}</small></span>
        <span onClick={handleDislike}><Dislike className="dislike" /><small>{countDislikes}</small></span>
      </div>
      <EditAndShare />
      <audio src={audioSource} ref={audioPlayer} onTimeUpdate={e => {
        setProgress((audioPlayer.current.currentTime * 100) / audioPlayer.current.duration);
      }} />
    </div>
  );
}

export default CardPlay;
