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

    const coverStyle = {
        backgroundImage: 'url("https://www.themoviedb.org/t/p/w533_and_h300_bestv2' + data?.backdrop_path + '")',
        backgroundSize: `cover`,
        backgroundRepeat: `no-repeat`,
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
            <div className={"filmContainer"} style={coverStyle}>
                <div className={"filmContainer"}
                     style={{backgroundImage: `linear-gradient(to right, rgba(220.5, 220.5, 220.5, 1), rgba(220.5, 220.5, 220.5, 0.84) 100%)`,}}>
                    <img alt="film" loading="lazy" src={BASE_IMG_URL + data?.poster_path}/>
                    <div className={"filmInfo"}>
                        <div className={"filmTitle"}>{data?.name} {data?.original_title}</div>
                        <div className={"genres"}>
                            {data?.genres.map((genre) => {
                                return genre.name + ", "
                            })}
                        </div>
                        <div className={"someInfoContainer"}>
                            <div className={"rating"}>{data?.vote_average}</div>
                            <div className={"dateStatusContainer"}>
                                <div
                                    className={"date"}>{prettyDate(data?.first_air_date)}{prettyDate(data?.release_date)}</div>
                                <div className={"status"}>{data?.status}</div>
                            </div>
                        </div>
                        <div className={"descriptionContainer"}>
                            <div className={"descriptionTile"}>Description</div>
                            <div className={"description"}>{data?.overview}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MoviePage;