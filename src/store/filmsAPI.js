import axios from "axios";
import {getFilmAction, getFilmsAction, newFilmsAction, newPageAction} from "./filmReducer";
import {BASE_FILMS_URL, FILMS_KEY} from "../consts";

function fetchFilms(path = "/discover/movie?sort_by=popularity.desc&api_key=" + FILMS_KEY) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data.results)
                console.log(data.data.page)
                dispatch(newFilmsAction(data.data.results))
                dispatch(newPageAction(data.data.page))
            });
    };
}

function newFilms(path = "/discover/movie?sort_by=popularity.desc&api_key=" + FILMS_KEY) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data.results)
                console.log(data.data.page)
                dispatch(getFilmsAction(data.data.results))
                dispatch(newPageAction(data.data.page))
            });
    };
}

function getFilm(path) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data)
                dispatch(getFilmAction(data.data))
            });
    };
}

export {fetchFilms, newFilms, getFilm}