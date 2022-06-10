import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, newFilms} from "../store/filmsAPI";
import FilmItem from "./FilmItem";
import {Button} from "react-bootstrap";
import {FILMS_KEY} from "../consts";

const Board = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmReducer.films)
    const page = useSelector(state => state.filmReducer.page)

    const loadMore = (e) => {
        const newPage =+page+1
        dispatch(newFilms("/discover/movie?sort_by=popularity.desc&api_key=" + FILMS_KEY + "&page=" + newPage))
    }

    useEffect(() => {
        if (!data) {
            dispatch(fetchFilms())
        }
    })

    return (
        <div className={"content"}>
            <div className={"board"}>
                {data?.map((item, i) => <FilmItem img={item.poster_path} title={item.original_title}
                                                  rating={item.vote_average} date={item.release_date} key={i}/>)}
            </div>
            <Button className={"loadButton"} onClick={loadMore} variant="primary">Load more</Button>
        </div>
    );
};

export default Board;