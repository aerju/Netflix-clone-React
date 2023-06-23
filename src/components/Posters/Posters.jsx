import React, { useState, useEffect } from "react";
import Axios from "../../Axios";
import { API_KEY, imgUrl } from "../Constants/Constants.jsx";
import "./Posters.css";
import Youtube from "react-youtube";

function Posters(props) {
  const [movie, setMovie] = useState([]);
  const [urlId, setUrlId] = useState("");
  useEffect(() => {
    Axios.get(props.url)
      .then((response) => {
        setMovie(response.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  
  const handleMovieTrailer = (id) => {
    console.log(id);
    Axios.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        console.log(response);
        if (response.data.results.length !== 0) {
          setUrlId(response.data.results[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movie.map((obj) => (
          <img
            onClick={() => handleMovieTrailer(obj.id)}
            className={props.isSmall ? "small-poster" : "poster"}
            src={`${imgUrl + obj.backdrop_path}`}
            alt=""
          />
        ))}
      </div>
      {urlId && <Youtube videoId={urlId.key} opts={opts} />}
    </div>
  );
}

export default Posters;
