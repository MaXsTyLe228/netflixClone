import React from 'react';
import {Button, Form} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";

const Search = () => {
    const dispatch = useDispatch()
    let textInput = React.createRef();

    const findMovie = () => {
        const text = textInput.current.value
        console.log(text)
        dispatch(fetchFilms('/search/movie?api_key=ceed96a8d65d1bac1ad9f10a951ac527&query=' + text))
    }

    const clearResults = () => {
        textInput.current.value = ""
        dispatch(fetchFilms())
    }

    return (
        <Form className={"searchContainer"}>
            <Form.Control placeholder="Search a movie" ref={textInput}/>
            <Button className={"searchButton"} variant="primary" onClick={findMovie}>Search</Button>
            <Button className={"searchButton"} variant="outline-secondary" onClick={clearResults}>clear results</Button>
        </Form>
    );
};

export default Search;