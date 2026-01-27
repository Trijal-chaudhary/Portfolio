import React, { useEffect, useRef, useState } from "react";
import "./PlayButton.css";
const PlayButton = ({ Setplaingstate, source }) => {
  const [IsPlaying, SetIsPlaying] = useState(false);
  const [currentTime, SetCurrentTime] = useState(0);
  const [duration, SetDuration] = useState(0);
  const audioRef = useRef();
  const handelSeek = (e) => {
    audioRef.current.currentTime = e.target.value;
    SetCurrentTime(e.target.value);
  };
  const handlePlayPause = () => {
    if (IsPlaying) {
      handelPause();
    } else {
      handlePlay();
    }
  };
  function formatDuration(durSec) {
    const min = Math.floor(durSec / 60);
    const sec = Math.floor(durSec % 60);
    const formatSec = sec.toString().padStart(2, "0");
    return `${min}:${formatSec}`;
  }
  const handleTimeupdates = () => {
    SetCurrentTime(audioRef.current.currentTime);
    SetDuration(audioRef.current.duration);
  };
  const handlePlay = () => {
    audioRef.current.play();
    SetIsPlaying(true);
    Setplaingstate(true);
  };
  useEffect(() => {
    if (!audioRef.current) return;
    audioRef.current.addEventListener("timeupdate", handleTimeupdates);
    return () => {
      if (audioRef.current)
        audioRef.current.removeEventListener("timeupdate", handleTimeupdates);
    };
  }, []);
  const handelPause = () => {
    audioRef.current.pause();
    SetIsPlaying(false);
    Setplaingstate(false);
  };
  return (
    <div className="playButtonCont">
      <div className="playpause" onClick={handlePlayPause}>
        {IsPlaying ? (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M176 96C149.5 96 128 117.5 128 144L128 496C128 522.5 149.5 544 176 544L240 544C266.5 544 288 522.5 288 496L288 144C288 117.5 266.5 96 240 96L176 96zM400 96C373.5 96 352 117.5 352 144L352 496C352 522.5 373.5 544 400 544L464 544C490.5 544 512 522.5 512 496L512 144C512 117.5 490.5 96 464 96L400 96z" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
            <path d="M187.2 100.9C174.8 94.1 159.8 94.4 147.6 101.6C135.4 108.8 128 121.9 128 136L128 504C128 518.1 135.5 531.2 147.6 538.4C159.7 545.6 174.8 545.9 187.2 539.1L523.2 355.1C536 348.1 544 334.6 544 320C544 305.4 536 291.9 523.2 284.9L187.2 100.9z" />
          </svg>
        )}
      </div>
      <div className="seekBarcont">
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handelSeek}
        />
        <audio ref={audioRef} src={source} />
        <div className="discurrTot">
          <p>{formatDuration(currentTime)}</p>
          <p>{formatDuration(duration)}</p>
        </div>
      </div>
    </div>
  );
};

export default PlayButton;
