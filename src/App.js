import React, { useState } from "react";

import "./main.css";

import Header from "./Components/Header/Header";
import SearchBar from "./Components/SearchBar/SearchBar";
import Result from "./Components/Result/Result";

const App = () => {
    const [movieList, setMovieList] = useState([]);

    return (
        <div className="app_container">
            <Header />
            <SearchBar setMovieList={setMovieList} />
            <Result movieList={movieList} />
        </div>
    );
};

export default App;
