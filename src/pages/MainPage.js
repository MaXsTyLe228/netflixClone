import React from 'react';
import FilmsBoard from "../componenets/FilmsBoard";
import Header from "../componenets/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviePage from "./MoviePage";
import TvBoard from "../componenets/TVBoard";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/movies" element={<FilmsBoard/>}/>
                <Route path="/tv" element={<TvBoard/>}/>
                <Route path="/movie/:movieId" element={<MoviePage type={"movie"}/>}/>
                <Route path="/tv/:tvId" element={<MoviePage type={"tv"}/>}/>
            </Routes>
        </div>
    );
};

export default MainPage;