import React from "react";
import { Link } from "react-router-dom";

import MovieCard from "./MovieCard";
import style from "./result.module.css";

const movieId = {
    "A new Hope": 1,
    "the Empire Strikes Back": 2,
    "Return of the Jedi": 3,
    "ThePhantom Menace": 4,
    "Attack of the Clones": 5,
    "Revenge of the Sith": 6,
};

const Result = (props) => {
    return (
        <div className={style.result_container}>
            {props.movieList.length <= 0 && <h4>No Movies At The Moment</h4>}
            {props.movieList.length > 0 &&
                props.movieList.map((movie, index) => {
                    return (
                        <Link to={`/movie/${movieId[movie.title]}`}>
                            <MovieCard movie={movie} key={index} />
                        </Link>
                    );
                })}
        </div>
    );
};

export default Result;
