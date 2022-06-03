import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";

const Board = () => {
    const dispatch = useDispatch()
    //const data = useSelector(state => state.filmsData)

    const getFilms = () => {

    }

    useEffect(() => {
        dispatch(fetchFilms())
    })

    return (
        <div>
        </div>
    );
};

export default Board;