import axios from "axios";
import {newFilmsAction} from "./filmReducer";

function fetchFilms(path="/discover/movie?sort_by=popularity.desc&api_key=ceed96a8d65d1bac1ad9f10a951ac527") {
    return async function (dispatch) {
        await axios.get("https://api.themoviedb.org/3" + path)
            .then((data) => {
                console.log(data.data.results)
                dispatch(newFilmsAction(data.data.results))
            });
    };
}

export {fetchFilms}