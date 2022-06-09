import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";
import FilmItem from "./FilmItem";

const Board = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmReducer.films)

    useEffect(() => {
        if (!data)
            dispatch(fetchFilms())
    })

    return (
        <div className={"board"}>
            {data?.map((item, i) => <FilmItem img={item.poster_path} title={item.original_title} rating={item.vote_average} date={item.release_date} key={i} />)}
        </div>
    );
};

export default Board;