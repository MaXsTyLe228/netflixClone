import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";
import {FILMS_KEY} from "../consts";
import {fetchTvs} from "../store/tvsAPI";

const Search = (props) => {
    const type = props.type
    const dispatch = useDispatch()
    let textInput = React.createRef();
    let num = window.location.pathname

    const findMovie = () => {
        const text = textInput.current.value
        console.log(text)
        if (props.type === "movie") {
            dispatch(fetchFilms('/search/' + type + '?api_key=' + FILMS_KEY + '&query=' + text))
        } else if (props.type === "tv") {
            dispatch(fetchTvs('/search/' + type + "?&api_key=" + FILMS_KEY + '&query=' + text))
        }
    }

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
            findMovie();
        }
    }

    const clearResults = () => {
        textInput.current.value = ""

        if (props.type === "movie") {
            dispatch(fetchFilms(num + "?&api_key=" + FILMS_KEY))
        } else if (props.type === "tv") {
            dispatch(fetchTvs(num + "?&api_key=" + FILMS_KEY))
        }
    }

    return (
        <div className={"searchContainer"}>
            <Form.Control placeholder={"Search a " + type} ref={textInput} onKeyPress={onKeyUp}/>
            <Button className={"searchButton"} variant="primary" onClick={findMovie}>Search</Button>
            <Button className={"searchButton"} variant="outline-secondary" onClick={clearResults}>clear</Button>
        </div>
    );
};

export default Search;