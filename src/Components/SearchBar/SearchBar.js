import React from "react";

import style from "./searchbar.module.css";

const SearchBar = () => {
    return (
        <div>
            <form id="searc-movie" action="">
                <div className={style.search_container}>
                    <div className={style.search_group}>
                        <label for="character">Character</label>
                        <select name="character" id="character">
                            <option value="">--- Select Character ---</option>
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label for="planet">Palanet</label>
                        <select name="planet" id="planet">
                            <option value="">--- Select Planet ---</option>
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label for="species">Species</label>
                        <select name="species" id="species">
                            <option value="">--- Select Species ---</option>
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label for="release_date">Release Date After</label>
                        <input type="date" name="release_date" id="release_date"></input>
                    </div>

                    <div className={style.submit}>
                        <button type="submit">Search</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
