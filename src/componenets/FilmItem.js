import React from 'react';
import {BASE_IMG_URL} from "../consts";
import {useNavigate} from 'react-router-dom';
import {getFilm} from "../store/filmsAPI";
import {useDispatch} from "react-redux";

const FilmItem = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch()


    const getMovie = () => {
        navigate('/movie/' + props.id);
        dispatch(getFilm('/movie/' + props.id + '?api_key=ceed96a8d65d1bac1ad9f10a951ac527'))
    }

    const prettyDate = (string) => {
        try {
            const arr = string.split("-")
            const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
                "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            const day = arr[2]
            const month = months[+arr[1] - 1]
            const year = arr[0]

            return day + " " + month + " " + year
        } catch (e) {
            console.log(e)
            return ""
        }
    }

    return (
        <div className={"filmItem"}>
            <div className={"filmCard"}>
                <img alt="film" loading="lazy" src={BASE_IMG_URL + props.img} onClick={getMovie}/>
                <div className={"filmInfo"}>
                    <div className={"title"}>
                        <div className={"rating"}>{props.rating}</div>
                        <a className={"filmName"} onClick={getMovie}>{props.title}</a>
                    </div>
                    <div className={"date"}>{prettyDate(props.date)}</div>
                </div>
            </div>
        </div>
    );
};

export default FilmItem;