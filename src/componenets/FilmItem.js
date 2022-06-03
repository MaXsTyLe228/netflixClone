import React from 'react';

const FilmItem = (props) => {
    return (
        <div>
            <img src={"https://www.themoviedb.org/t/p/w220_and_h330_face"+ props.img}/>
        </div>
    );
};

export default FilmItem;