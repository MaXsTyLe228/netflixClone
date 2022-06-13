import React, {useEffect} from 'react';
import {fetchFilms, getFilm} from "../store/filmsAPI";
import {useDispatch, useSelector} from "react-redux";

const MoviePage = (props) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmReducer.film)
    const num = window.location.pathname.replace('/movie/', '')

    return (
        <div>
            {num}
        </div>
    );
};

export default MoviePage;