import React from 'react';
import {BASE_IMG_URL} from "../consts";

const FilmItem = (props) => {

    const prettyDate = (string) => {
        const arr = string.split("-")
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const day = arr[2]
        const month = months[+arr[1] - 1]
        const year = arr[0]

        return day + " " + month + " " + year
    }

    return (
        <div className={"filmItem"}>
            <div className={"filmCard"}>
                <img alt="film" loading="lazy" src={BASE_IMG_URL + props.img}/>
                <div className={"filmInfo"}>
                    <div className={"title"}>
                        <div className={"rating"}>{props.rating}</div>
                        <a className={"filmName"}>{props.title}</a>
                    </div>
                    <div className={"date"}>{prettyDate(props.date)}</div>
                </div>
            </div>
        </div>
    );
};

export default FilmItem;