import React from 'react';
import {BASE_IMG_URL} from "../consts";
import {useNavigate} from 'react-router-dom';

const FilmItem = (props) => {
    const navigate = useNavigate();

    const getMovie = () => {
        navigate('/' + props.type + '/' + props.id);
    }

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