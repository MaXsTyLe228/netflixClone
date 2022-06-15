import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";
import {FILMS_KEY} from "../consts";

const Search = (props) => {
    const type = props.type
    const dispatch = useDispatch()
    let textInput = React.createRef();
    let num = window.location.pathname

    const findMovie = () => {
        const text = textInput.current.value
        console.log(text)
        dispatch(fetchFilms('/search/' + type + '?api_key=ceed96a8d65d1bac1ad9f10a951ac527&query=' + text))
    }

    const onKeyUp = (event) => {
        if (event.charCode === 13) {
            findMovie();
        }
    }

    const clearResults = () => {
        textInput.current.value = ""
        dispatch(fetchFilms(num + "?&api_key=" + FILMS_KEY))
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