import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchFilms} from "../store/filmsAPI";
import FilmItem from "./FilmItem";

const Board = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.filmReducer.films)

    useEffect(() => {
        if (!data)
            dispatch(fetchFilms())
    }, [null])

    const test = () => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        let rows = [];
        for (let item in data) {
            // note: we are adding a key prop here to allow react to uniquely identify each
            // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
            rows.push(<FilmItem key={item} img={data[item].backdrop_path}/>);
        }
        return <tbody>{rows}</tbody>;
        // for (let item of data){
        //     console.log(item.backdrop_path)
        //     return(<FilmItem img={item.backdrop_path}/>)
        // }
    }

    return (
        <div>
            board
            asd
            {data?.map((item, i) => <FilmItem img={item.poster_path} key={i} />)}
        </div>
    );
};

export default Board;