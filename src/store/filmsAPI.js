import axios from "axios";
import {getFilmsAction} from "./filmReducer";

function fetchFilms(path) {
    return async function (dispatch) {
        await axios.get(process.env.BASE_FILMS_URL + path)
            .then((data) => {
                console.log(data.data)
                dispatch(getFilmsAction(data.data))
            });
    };
}

export {fetchFilms}