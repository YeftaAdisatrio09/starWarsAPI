import React from "react";

import MovieDetail from "./MovieDetail";

import style from "./result.module.css";

const MovieCard = () => {
    return (
        <div className={style.movie_card}>
            <MovieCard lable="Episode" value="" />
            <MovieCard lable="Title" value="" />
            <MovieCard lable="Release Date" value="" />
            <MovieCard lable="Director" value="" />
            <MovieCard lable="Producer" value="" />
        </div>
    );
};

export default MovieCard;
