import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchTvs, newTvs} from "../store/tvsAPI";
import {FILMS_KEY} from "../consts";
import Search from "./Search";
import FilmItem from "./FilmItem";
import {Button} from "react-bootstrap";

const TvBoard = () => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.tvReducer.tv)
    const page = useSelector(state => state.tvReducer.tvPage)
    let num = window.location.pathname

    const loadMore = (e) => {
        const newPage = +page + 1
        dispatch(newTvs(num + "?&api_key=" + FILMS_KEY + "&page=" + newPage))
    }

    useEffect(() => {
        if (!data) {
            const fetchData = async () => {
                await dispatch(fetchTvs(num + "?&api_key=" + FILMS_KEY))
                    .catch(console.error);
            }
            fetchData()
        }
    }, [])

    return (
        <div className={"content"}>
            <Search type={"tv"}/>
            <div className={"board"}>
                {data?.map((item, i) => <FilmItem type={"oneTv"}
                                               id={item.id}
                                               img={item.poster_path}
                                               title={item.name}
                                               rating={item.vote_average}
                                               date={item.first_air_date}
                                               key={i}/>)}
            </div>
            <Button className={"loadButton"} onClick={loadMore} variant="primary">Load more</Button>
        </div>
    );
};

export default TvBoard;