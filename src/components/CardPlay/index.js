import React, { useState, useRef, useEffect } from 'react';
import { PlayCircleTwoTone, PauseCircleTwoTone, DislikeFilled, LikeFilled } from '@ant-design/icons';

import EditAndShare from '../edit-and-share';
import ImageAudio from '../ImageAudio';
import audioBadBunny from '../Audio/Bad Bunny - Si la veo a tu mama.mp3';
import './styles.css';

const CardPlay = (props) => {
  const audioPlayer = useRef(null);
  const [progress, setProgress] = useState(80);
  const [title, setTitle] = useState('Bad Bunny - Si la veo a tu mamá');
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);

  useEffect(() => {
    console.log(progress, audioPlayer.current.duration);
  }, [progress]);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleLike = (event) => {
    setCountLikes(countLikes + 1);
  };
  const handleDislike = (event) => {
    setCountDislikes(countDislikes + 1);
  };
  const toggleAudio = () => {
    if (isPlaying) {
      audioPlayer.current.pause();
      setIsPlaying(false);
    } else {
      audioPlayer.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="card-container">
      <ImageAudio />
      <div className="audio-title">
        <p>{title}</p>
        <div className="container-audio" onClick={toggleAudio}>
          <span className="icon-play">
            {isPlaying ? (
              <PauseCircleTwoTone style={{ fontSize: '25px' }} />
            ) : (
              <PlayCircleTwoTone style={{ fontSize: '25px' }} />
            )}
          </span>
          <div className="audio">
            <div className="player">
              <div className="logo" />
            </div>
            <div className="progress">
              <div className="loading" style={{ width: `${progress}%` }} />
            </div>
          </div>
        </div>
      </div>
      <div className="like-dislike">
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
      <EditAndShare />
      <audio
        src={audioBadBunny}
        ref={audioPlayer}
        onTimeUpdate={(e) => {
          setProgress((audioPlayer.current.currentTime * 100) / audioPlayer.current.duration);
        }}
      />
    </div>
  );
};

export default CardPlay;
