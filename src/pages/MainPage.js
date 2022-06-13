import React from 'react';
import Board from "../componenets/Board";
import Header from "../componenets/Header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MoviePage from "./MoviePage";

const MainPage = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/movies" element={<Board/>}/>
                <Route path="/tv" element={<Board/>}/>
                <Route path="/movie/:movieId" element={<MoviePage/>}/>
            </Routes>
        </div>
    );
};

export default MainPage;