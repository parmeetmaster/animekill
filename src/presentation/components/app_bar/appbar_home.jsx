import React from "react";
import axios from "axios";


export  function AppbarHome() {

/*    const [statedata,setStateData]=React.useState({user:"ami jackson"});

    React.useEffect(()=>{
        console.log('i fire once');
        axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
        axios.get('/todos/1')
            .then(function (response) {
                // handle success
                setStateData({...statedata,  user: response.data.title,});

                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .then(function () {
                // always executed
            });
        return undefined;
    },[])


    function handleEvent(event) {
        setStateData({...statedata,  user: "prabhu",});

    }*/

    return (<>
            <div id="header">
                <div className="container">
                    <div id="site_menu">
                        <div className="site_menu-icon"><i className="fa fa-bars"></i></div>
                        <div id="header_menu" className={
                            "active"
                            /* its active when mobile     */}>
                            <ul className="nav header_menu-list">
                                <li className="nav-item"><a href="/home" title="Home">Home</a></li>
                                <li className="nav-item"><a title="Genres">Genres</a>
                                    <div className="header_menu-sub size-l">
                                        <ul className="sub-menu">

                                            <li><a href="/genre/action" title="Action">Action</a></li>

                                            <li><a href="/genre/adventure" title="Adventure">Adventure</a></li>

                                            <li><a href="/genre/cars" title="Cars">Cars</a></li>

                                            <li><a href="/genre/comedy" title="Comedy">Comedy</a></li>

                                            <li><a href="/genre/dementia" title="Dementia">Dementia</a></li>

                                            <li><a href="/genre/demons" title="Demons">Demons</a></li>

                                            <li><a href="/genre/drama" title="Drama">Drama</a></li>

                                            <li><a href="/genre/ecchi" title="Ecchi">Ecchi</a></li>

                                            <li><a href="/genre/fantasy" title="Fantasy">Fantasy</a></li>

                                            <li><a href="/genre/game" title="Game">Game</a></li>

                                            <li><a href="/genre/harem" title="Harem">Harem</a></li>

                                            <li><a href="/genre/historical" title="Historical">Historical</a></li>

                                            <li><a href="/genre/horror" title="Horror">Horror</a></li>

                                            <li><a href="/genre/isekai" title="Isekai">Isekai</a></li>

                                            <li><a href="/genre/josei" title="Josei">Josei</a></li>

                                            <li><a href="/genre/kids" title="Kids">Kids</a></li>

                                            <li><a href="/genre/magic" title="Magic">Magic</a></li>

                                            <li><a href="/genre/marial-arts" title="Martial Arts">Martial Arts</a></li>

                                            <li><a href="/genre/mecha" title="Mecha">Mecha</a></li>

                                            <li><a href="/genre/military" title="Military">Military</a></li>

                                            <li><a href="/genre/music" title="Music">Music</a></li>

                                            <li><a href="/genre/mystery" title="Mystery">Mystery</a></li>

                                            <li><a href="/genre/parody" title="Parody">Parody</a></li>

                                            <li><a href="/genre/police" title="Police">Police</a></li>

                                            <li><a href="/genre/psychological" title="Psychological">Psychological</a>
                                            </li>

                                            <li><a href="/genre/romance" title="Romance">Romance</a></li>

                                            <li><a href="/genre/samurai" title="Samurai">Samurai</a></li>

                                            <li><a href="/genre/school" title="School">School</a></li>

                                            <li><a href="/genre/sci-fi" title="Sci-Fi">Sci-Fi</a></li>

                                            <li><a href="/genre/seinen" title="Seinen">Seinen</a></li>

                                            <li><a href="/genre/shoujo" title="Shoujo">Shoujo</a></li>

                                            <li><a href="/genre/shoujo-ai" title="Shoujo Ai">Shoujo Ai</a></li>

                                            <li><a href="/genre/shounen" title="Shounen">Shounen</a></li>

                                            <li><a href="/genre/shounen-ai" title="Shounen Ai">Shounen Ai</a></li>

                                            <li><a href="/genre/slice-of-life" title="Slice of Life">Slice of Life</a>
                                            </li>

                                            <li><a href="/genre/space" title="Space">Space</a></li>

                                            <li><a href="/genre/sports" title="Sports">Sports</a></li>

                                            <li><a href="/genre/super-power" title="Super Power">Super Power</a></li>

                                            <li><a href="/genre/supernatural" title="Supernatural">Supernatural</a></li>

                                            <li><a href="/genre/thriller" title="Thriller">Thriller</a></li>

                                            <li><a href="/genre/vampire" title="Vampire">Vampire</a></li>

                                            <li><a href="/genre/yaoi" title="Yaoi">Yaoi</a></li>

                                            <li><a href="/genre/yuri" title="Yuri">Yuri</a></li>

                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </li>
                                <li className="nav-item"><a title="Types">Types</a>
                                    <div className="header_menu-sub">
                                        <ul className="sub-menu">
                                            <li><a href="/movie">Movies</a></li>
                                            <li><a href="/tv">TV Series</a></li>
                                            <li><a href="/ova">OVAs</a></li>
                                            <li><a href="/ona">ONAs</a></li>
                                            <li><a href="/special">Specials</a></li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </li>
                                <li className="nav-item"><a href="/recently-updated" title="Updated">Updated</a></li>
                                <li className="nav-item"><a href="/recently-added" title="Added">Added</a></li>
                                <li className="nav-item"><a href="/ongoing" title="Ongoing">Ongoing</a></li>
                                <li className="nav-item"><a href="/upcoming" title="Upcoming">Upcoming</a></li>
                                <li className="nav-item"><a href="/random" title="Random">Random</a></li>
                            </ul>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <a href="/" id="logo" title="">
                        <img src="https://AnimeKill.vc/images/logo.png" title="" alt=""/>
                        <div className="clearfix"></div>
                    </a>
                    <div id="header_right">
                        <div id="m-search" className="mobile-btn"><i className="fas fa-search"></i></div>
                        <div id="user-slot">
                            <div className="header_right-user">
                                <a data-toggle="modal" data-target="#modallogin"
                                   className="btn-user btn btn-sm btn-primary btn-login">Sign in</a>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>

        </>
    );
}
