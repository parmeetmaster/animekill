
import React from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import {Home} from "./presentation/screen/home/home";
import CategoryBase from "./presentation/screen/category_base/category_base";
import PermanentDrawerLeft from "./presentation/screen/dashboard/dashboard_index";
import {Page404} from "./presentation/screen/404/page404";



export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Page404/>}/>
                <Route path="/" element={<Home/>}/>
                <Route path="home" element={<CategoryBase/>}/>
                <Route path="da/:id" element={<CategoryBase/>}/>
                <Route path="dashboard/:option" element={<PermanentDrawerLeft/>}/>

            </Routes>
        </BrowserRouter>
    );
}




