import React, {useEffect} from 'react';
import {fetchFilms, getFilm} from "../store/filmsAPI";
import {useDispatch, useSelector} from "react-redux";
import {BASE_IMG_URL, FILMS_KEY} from "../consts";

const MoviePage = (props) => {
    const dispatch = useDispatch()
    let data = useSelector(state => state.filmReducer.film)
    let num = window.location.pathname.replace('/movie/', '').replace('/tv/', '')

    const prettyDate = (string) => {
        if (string) {
            const arr = string.split("-")
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const day = arr[2]
            const month = months[+arr[1] - 1]
            const year = arr[0]

            return day + " " + month + " " + year
        } else return ""
    }

    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getFilm('/' + props.type + '/' + num + '?api_key=' + FILMS_KEY));
        }
        fetchData()
            .catch(console.error);
    }, [])

    return (
        <div className={"filmPage"}>
            <div className={"filmContainer"}>
                <img alt="film" loading="lazy" src={BASE_IMG_URL + data?.poster_path}/>
                <div className={"filmInfo"}>
                    <div className={"filmTitle"}>{data?.name} {data?.original_title}</div>
                    <div className={"genres"}>
                        {data?.genres.map((genre) => {
                            return genre.name+", "
                        })}
                    </div>
                    <div className={"date"}>{prettyDate(data?.first_air_date)}{prettyDate(data?.release_date)}</div>
                    <div className={"status"}>{data?.status}</div>
                    <div className={"descriptionTile"}>description</div>
                    <div className={"description"}>{data?.overview}</div>
                    <div className={"rating"}>{data?.vote_average}</div>

                </div>
            </div>
        </div>
    );
};

export default MoviePage;