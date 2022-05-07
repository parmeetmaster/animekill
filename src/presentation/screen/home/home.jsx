import '../../css/style.css'
import React from "react";
import Helmet from "react-helmet";

import HomeBody from "./homebody";
import Footer from "../../components/footer/main_footer";
import {AppbarHome} from "../../components/app_bar/appbar_home";


export function Home() {

    return (<>
        <Helmet>
            <title>HomeScreen</title>
            <meta name="description" content="Nested component"/>
        </Helmet>

        <AppbarHome/>
        <HomeBody/>
        <Footer/>
    </>);
}

