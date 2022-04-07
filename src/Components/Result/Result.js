import React from "react";

import MovieCard from "./MovieCard";
import style from "./result.module.css";

const Result = () => {
    return (
        <div className={style.result_container}>
            <MovieCard />
            <MovieCard />
            <MovieCard />
            <MovieCard />
        </div>
    );
};

export default Result;
