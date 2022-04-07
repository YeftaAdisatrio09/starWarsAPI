import React from "react";

import MovieDetail from "./MovieDetail";

import style from "./result.module.css";

const MovieCard = (props) => {
    return (
        <div className={style.movie_card}>
            <MovieDetail lable="Episode" value={props.movie.episode_id} />
            <MovieDetail lable="Title" value={props.movie.title} />
            <MovieDetail lable="Release Date" value={props.movie.release_date} />
            <MovieDetail lable="Director" value={props.movie.director} />
            <MovieDetail lable="Producer" value={props.movie.producer} />
        </div>
    );
};

export default MovieCard;
