import React, { FC } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {CountryProvider} from "../../context/CountryProvider";
import {Homepage} from "../homepage/Homepage";
import { NotFound } from "../not-found/NotFound";
import './app.css';

export const App: FC = () => {
    return (
        <div className="container mx-auto px-10 justify-center">
            <CountryProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Router>
            </CountryProvider>
        </div>
    );
}
