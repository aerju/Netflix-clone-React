import { useState } from "react";
import Axios from "../../Axios";
import { API_KEY, imgUrl } from "../Constants/Constants.jsx";
import "./Banner.css";
import { useEffect } from "react";
function Banner() {
  const [movie, setMovie] = useState();

  useEffect(() => {
    Axios.get(
      `https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`
    ).then((response) => {
      const index = Math.floor(Math.random() * 19) + 0;
      setMovie(response.data.results[index]);
    });
  }, []);
  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url( ${movie ? imgUrl + movie.backdrop_path : ""})`,
      }}
    >
      <div className="content">
        <div className="title">{movie ? movie.title : ""}</div>
        <div className="banner-button">
          <button className="button">Play</button>
          <button className="button">My list</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>
      </div>
      <div className="fade-bottom"></div>
    </div>
  );
}

export default Banner;
