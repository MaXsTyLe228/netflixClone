import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms, newFilms} from "../store/filmsAPI";
import {FILMS_KEY} from "../consts";
import Search from "./Search";
import FilmItem from "./FilmItem";
import {Button} from "react-bootstrap";

const TvBoard = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmReducer.films)
    const page = useSelector(state => state.filmReducer.page)

    const loadMore = (e) => {
        const newPage = +page + 1
        dispatch(newFilms("/tv/popular?&api_key=" + FILMS_KEY + "&page=" + newPage))
    }

    useEffect(() => {
        if (!data) {
            dispatch(fetchFilms("/tv/popular?&api_key=" + FILMS_KEY))
        }
    })

    return (
        <div className={"content"}>
            <Search type={"tv"}/>
            <div className={"board"}>
                {data?.map((item, i) => <FilmItem type={"tv"} id={item.id} img={item.poster_path} title={item.name}
                                                  rating={item.vote_average} date={item.first_air_date} key={item.id}/>)}
            </div>
            <Button className={"loadButton"} onClick={loadMore} variant="primary">Load more</Button>
        </div>
    );
};

export default TvBoard;