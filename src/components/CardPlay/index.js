/* eslint-disable react/prop-types */
/* eslint-disable no-magic-numbers */
import React, { useState, useRef, useEffect } from 'react';
import { Slider } from 'antd';

import ImageAudio from '../ImageAudio';
import EditAndShare from '../edit-and-share';

import { ReactComponent as Like } from './img/Like.svg';
import { ReactComponent as Dislike } from './img/Dislike.svg';
import { ReactComponent as PlayIcon } from './img/play-circle-o.svg';
import { ReactComponent as PauseIcon } from './img/pause-circle-o.svg';

import './styles.css';

const CardPlay = (props) => {
  const [player] = useState(props);
  const audioPlayer = useRef(null);
  const [audioSource, setAudioSource] = useState('');
  const [cover, setCover] = useState('https://via.placeholder.com/75');
  const [progress, setProgress] = useState(0);
  const [title, setTitle] = useState('');
  const [countLikes, setCountLikes] = useState(0);
  const [countDislikes, setCountDislikes] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setTitle(player.title);
    setCountLikes(player.thumbsUp);
    setCountDislikes(player.thumbsDown);
    setCover(player.cover);
    setAudioSource(player.audioSource);
    setProgress(0);
  }, [player, title, countLikes, countDislikes, cover]);

  const handleLike = (e) => {
    setCountLikes(player.thumbsUp + 1);
  };
  const handleDislike = (e) => {
    setCountDislikes(player.thumbsDown + 1);
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
  const ChangeProgress = (value) => {
    setProgress(value);
  };
  return (
    <div className="card-container">
      <ImageAudio image={cover} alt={title} />
      <div className="player">
        <p className="audio-title">{title}</p>
        <div className="audio-controls">
          <div className="icon-play" onClick={toggleAudio}>
            {isPlaying ? <PauseIcon /> : <PlayIcon />}
          </div>
          <Slider
            className="progress"
            min={0}
            max={100}
            onChange={ChangeProgress}
            value={progress}
            tipFormatter={null}
          />
          <time className="elapsed">{progress.toFixed(2)}</time>
        </div>
      </div>
      <div className="like-dislike">
        <span>
          <Like onClick={handleLike} />
          <small>{countLikes}</small>
        </span>
        <span>
          <Dislike onClick={handleDislike} className="dislike" />
          <small>{countDislikes}</small>
        </span>
      </div>
      <EditAndShare id={props.id} />
      <audio
        src={audioSource}
        ref={audioPlayer}
        onTimeUpdate={(e) => {
          setProgress((audioPlayer.current.currentTime * 100) / audioPlayer.current.duration);
        }}
      />
    </div>
  );
};

export default CardPlay;
