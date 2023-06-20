import React, { useState} from "react";
import "./videoSidebar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ChatIcon from "@mui/icons-material/Chat";
import ShareIcon from "@mui/icons-material/Share";

function VideoSidebar({likes, messages, shares}) {

    const [liked, setLiked] = useState(false)

    function handdleLike() {
        setLiked(!liked)
  } {/* Essa função muda o ícone de coração vazio para um coração preenchido ou o contrário ao clicar na tela */}

  return (
    <div className="videoSidebar">
      <div 
      className="videoSidebar__options" 
      onClick={handdleLike}
      >
        { liked ? <FavoriteIcon fontSize="large"/> : <FavoriteBorderIcon fontSize="large"/> }
        {/* LÊ-SE: Se "liked == true" (liked ?), então insira "FavoriteIcon", senão (:), então insira FavoriteBorderIcon. Mesma lógica de if e else. */}

        <p> { liked ? likes + 1 : likes }</p>
      </div>
      <div className="videoSidebar__options">
        <ChatIcon fontSize="large" />
        <p> { messages } </p>
      </div>
      <div className="videoSidebar__options">
        <ShareIcon fontSize="large" />
        <p> { shares } </p>
      </div>
    </div>
  );
}

export default VideoSidebar;
