
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./presentation/screen/home";
import CategoryBase from "./presentation/components/category_base/category_base";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<CategoryBase/>}/>
            </Routes>
        </BrowserRouter>
    );
}




