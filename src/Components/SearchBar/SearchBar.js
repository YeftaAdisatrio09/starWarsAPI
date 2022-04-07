import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

import style from "./searchbar.module.css";

const SearchBar = (props) => {
    const [characterOptions, setCharacterOption] = useState([]);
    const [planetOptions, setplanetOption] = useState([]);
    const [speciesOptions, setSpeciesOption] = useState([]);

    useEffect(() => {
        fetch("https://swapi.dev/api/people")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setCharacterOption([...data.results]);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch("https://swapi.dev/api/planets")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setplanetOption([...data.results]);
            })
            .catch((err) => {
                console.log(err);
            });

        fetch("https://swapi.dev/api/species")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                setSpeciesOption([...data.results]);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = (FormData) => {
        fetch("https://swapi.dev/api/films")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                props.setMovieList([
                    ...data.results.filter((item) => {
                        let hasCharacter, hasPlanet, hasSpesies, releaseAfter;
                        if (FormData.character) {
                            hasCharacter = item.characters.includes(FormData.character);
                        } else {
                            hasCharacter = true;
                        }
                        if (FormData.planet) {
                            hasPlanet = item.planets.includes(FormData.planet);
                        } else {
                            hasPlanet = true;
                        }
                        if (FormData.species) {
                            hasSpesies = item.species.includes(FormData.species);
                        } else {
                            hasSpesies = true;
                        }
                        if (FormData.release_date) {
                            releaseAfter = new Date(item.release_date) >= new Date(FormData.release_date);
                        } else {
                            releaseAfter = true;
                        }

                        return hasCharacter && hasPlanet && hasSpesies && releaseAfter;
                    }),
                ]);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <form id="searc-movie" onSubmit={handleSubmit(onSubmit)}>
                <div className={style.search_container}>
                    <div className={style.search_group}>
                        <label htmlFor="character">Character</label>
                        <select name="character" id="character" {...register("character")}>
                            <option value="">--- Select Character ---</option>
                            {characterOptions.map((item, index) => {
                                return (
                                    <option value={item.url} key={index}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="planet">Palanet</label>
                        <select name="planet" id="planet" {...register("planet")}>
                            <option value="">--- Select Planet ---</option>
                            {planetOptions.map((item, index) => {
                                return (
                                    <option value={item.url} key={index}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="species">Species</label>
                        <select name="species" id="species" {...register("species")}>
                            <option value="">--- Select Species ---</option>
                            {speciesOptions.map((item, index) => {
                                return (
                                    <option value={item.url} key={index}>
                                        {item.name}
                                    </option>
                                );
                            })}
                        </select>
                    </div>

                    <div className={style.search_group}>
                        <label htmlFor="release_date">Release Date After</label>
                        <input type="date" name="release_date" id="release_date" {...register("release_date")}></input>
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
