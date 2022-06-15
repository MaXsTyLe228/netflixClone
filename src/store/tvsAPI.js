import axios from "axios";
import {getTvAction, getTvsAction, newTvsAction, newTvPageAction} from "./tvReducer";
import {BASE_FILMS_URL, FILMS_KEY} from "../consts";

function fetchTvs(path = "/tv/popular?&api_key=" + FILMS_KEY) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data.results)
                console.log(data.data.page)
                dispatch(newTvsAction(data.data.results))
                dispatch(newTvPageAction(data.data.page))
            });
    };
}

function newTvs(path = "tv/popular?&api_key=" + FILMS_KEY) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data.results)
                console.log(data.data.page)
                dispatch(getTvsAction(data.data.results))
                dispatch(newTvPageAction(data.data.page))
            });
    };
}

function getTv(path) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data)
                dispatch(getTvAction(data.data))
            });
    };
}

export {fetchTvs, newTvs, getTv}