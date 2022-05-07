import React from 'react';
import {AppBar} from "../../components/app_bar/app_bar";
import Footer from "../../components/footer/main_footer";
import {GridBody} from "./grid_body";


export default function CategoryBase() {
    React.useEffect(() => {

        //  console.log( id);

    }, [])

    return (<>
        <AppBar/>
        <GridBody/>

        {/*
        footer
        */}
        <Footer/>

    </>);
}