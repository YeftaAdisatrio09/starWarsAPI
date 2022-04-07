import React, { useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import Result from "../Result/Result";

const Home = () => {
    const [movieList, setMovieList] = useState([]);
    return (
        <>
            <SearchBar setMovieList={setMovieList} />
            <Result movieList={movieList} />
        </>
    );
};

export default Home;
