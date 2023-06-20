import React, { useRef, useState } from "react";
import VideoFooter from './components/footer/VideoFooter'
import VideoSidebar from "./components/sidebar/VideoSidebar";
import "./video.css";

function Video({likes, messages, shares, name, description, music, url}) {
  const videoRef = useRef(null);
  const [play, setPlay] =
    useState(false); /* A página iniciará com o vídeo pausado */

  function handdleStart() {
    if (play) {
      /* Se o play for true: */
      videoRef.current.pause();
      setPlay(false);
      /* Se o vídeo estiver rodando e a tela for pressionada, o vídeo irá pausar e o estado mudará para "false" */
    } else {
      videoRef.current.play();
      setPlay(true);
      /* Se o vídeo estiver pausado e a tela for clicada, o vídeo irá rodar e o estado mudará para "true" */
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src={url}
      ></video>
      
      <VideoSidebar 
        likes={likes}
        messages={messages}
        shares={shares}
      />
      < VideoFooter 
        name={name}
        description={description}
        music={music}
      />
 
    </div>
  );
}

export default Video;
