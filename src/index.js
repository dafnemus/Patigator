import React, { useState, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import { PlayCircleTwoTone } from '@ant-design/icons';
import "./styles.css";

function App() {
  const audioPlayer = useRef(null);
  const [progress, setProgress] = useState(80);

  useEffect(() => {
    console.log(progress, audioPlayer.current.duration);
  }, [progress]);
  const [isPlaying, setPlaying] = useState(true);
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
    <div>
      <div className="audio">
        <div className="player">
          <div className="logo" onClick={toggleAudio}>
            <b><PlayCircleTwoTone /></b>
          </div>
        </div>
        <div className="progress">
          <div className="loading" style={{ width: `${progress}%` }} />
        </div>
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

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
