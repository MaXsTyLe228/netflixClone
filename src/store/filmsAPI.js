import axios from "axios";
import {newFilmsAction} from "./filmReducer";
import {BASE_FILMS_URL, FILMS_KEY} from "../consts";

function fetchFilms(path="/discover/movie?sort_by=popularity.desc&api_key="+FILMS_KEY) {
    return async function (dispatch) {
        await axios.get(BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data.results)
                dispatch(newFilmsAction(data.data.results))
            });
    };
}

export {fetchFilms}