import React from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const Trailer = () => {
  let params = useParams();
  const key = params.youtubeTrailerId;

  return <div className="react-player-container">Trailer</div>;
};

export default Trailer;
