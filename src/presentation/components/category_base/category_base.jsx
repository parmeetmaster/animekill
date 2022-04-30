import React  from 'react';
import Tooltip from 'react-qtip';

export default function CategoryBase() {
    var running = false;

    const [state, setState] = React.useState({
        typing: false
    })

    function onChange(event) {
        console.log(`true value is ${event.target.value}`);


        if (running == false) {
            running = true;
            setTimeout(() => {
                if (event.target.value == "") {
                    setState({...state, typing: false})
                } else {
                    setState({...state, typing: true})
                }

                console.log('Hello, World!');
                running = false;
            }, 1000);


        }
    }

    React.useEffect(() => {

    }, [])

    return (<>
        <div id="wrapper">
            <div id="header">
                <div className="container">
                    <div id="site_menu">
                        <div className="site_menu-icon"><i className="fa fa-bars"></i></div>
                        <div id="header_menu">
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
                        <img src="/images/logo.png" title="" alt=""/>
                        <div className="clearfix"></div>
                    </a>

                    {/*update class name for mobile on click*/}
                    <div id="search" className={""}>
                        <div className="search-content">
                            <form action="/search" autoComplete="off">
                                <input type="text" className="form-control search-input" name="keyword"
                                       onChange={onChange}
                                       placeholder="Enter anime name"/>
                                <button type="submit" className="search-icon"><i className="fas fa-search"></i>
                                </button>
                            </form>
                            {/*result pop up on type complete*/}
                            <div className="nav search-result-pop" id="search-suggest"
                                 style={{display: state.typing ? "block" : "none"}}>
                                <div className="loading-relative" id="search-loading" style={{display: "none"}}>
                                    <div className="loading">
                                        <div className="span1"></div>
                                        <div className="span2"></div>
                                        <div className="span3"></div>
                                    </div>
                                </div>
                                {/* here is result to be show */}
                                <div className="result" style={{display: "block"}}>
                                    <a href="/watch/chaika-the-coffin-princess-avenging-battle-2633"
                                       className="nav-item">
                                        <div className="film-poster"><img
                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/22/26/2226188787a50f43cbdd3409df439152/2226188787a50f43cbdd3409df439152.jpg"
                                            className="film-poster-img ls-is-cached lazyloaded"
                                            alt="Chaika -The Coffin Princess- Avenging Battle"
                                            src="https://img.bunnycdnn.ru/_r/300x400/100/22/26/2226188787a50f43cbdd3409df439152/2226188787a50f43cbdd3409df439152.jpg"/>
                                        </div>
                                        <div className="srp-detail">
                                            <h3 className="film-name"
                                                data-jname="Hitsugi no Chaika: Avenging Battle">Chaika -The Coffin
                                                Princess- Avenging Battle</h3>
                                            <div className="film-infor"><span>Oct 9, 2014</span><i className="dot"></i>TV
                                                Series<i className="dot"></i><span>23m</span></div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </a>

                                    <a href="/watch/initial-d-battle-stage-1385" className="nav-item">
                                        <div className="film-poster"><img
                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/b5/8b/b58b09c3f6fb84b78e3c0d61b63fc2ba/b58b09c3f6fb84b78e3c0d61b63fc2ba.jpg"
                                            className="film-poster-img ls-is-cached lazyloaded"
                                            alt="Initial D Battle Stage"
                                            src="https://img.bunnycdnn.ru/_r/300x400/100/b5/8b/b58b09c3f6fb84b78e3c0d61b63fc2ba/b58b09c3f6fb84b78e3c0d61b63fc2ba.jpg"/>
                                        </div>
                                        <div className="srp-detail">
                                            <h3 className="film-name" data-jname="Initial D Battle Stage">Initial D
                                                Battle Stage</h3>
                                            <div className="film-infor"><span>May 15, 2002</span><i className="dot"></i>OVA<i
                                                className="dot"></i><span>52m</span></div>
                                        </div>
                                        <div className="clearfix"></div>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="header-group">
                        <div className="socials-group">
                            <div className="scg-list">

                                <div className="item"><a href="#" className="sc-social-button tl-btn"><i
                                    className="fab fa-telegram-plane"></i></a>
                                </div>
                                <div className="item"><a href="#" className="sc-social-button rd-btn"><i
                                    className="fab fa-reddit-alien"></i></a></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
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


        </div>

        <div className="modal fade premodal premodal-login" id="modallogin" tabIndex="-1" role="dialog"
             aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="tab-content">

                        {/* tab-pane active show in model   */}
                        <div id="modal-tab-login" className="tab-pane active">
                            <div className="modal-login-icon"><img src="https://www.freeiconspng.com/uploads/anime-png-18.png"/></div>
                            <div className="modal-header">
                                <h5 className="modal-title">Member Login</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="description">9anime - a better place to watch anime online for free!
                                </div>
                                <div className="alert alert-danger" id="login-error" style={{display: "none"}}></div>
                                <form className="loginform" id="login-form" method="post">
                                    <div className="form-group w-icon">
                                        <input type="text" className="form-control" id="email" placeholder="Your Email"
                                               name="email" required/>
                                            <i className="fas fa-user"></i>
                                    </div>
                                    <div className="form-group w-icon">
                                        <input type="password" className="form-control" id="password"
                                               placeholder="Password" name="password" required/>
                                            <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="form-check custom-control custom-checkbox">
                                        <div className="float-left">
                                            <input type="checkbox" className="custom-control-input" id="remember"/>
                                                <label className="custom-control-label" htmlFor="remember">Remember
                                                    me</label>
                                        </div>
                                        <div className="float-right">
                                            <a href="javascript:;"
                                               className="link-highlight text-forgot forgot-tab-link">Forgot
                                                password?</a>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="form-group login-btn mb-0">
                                        <button id="btn-login" className="btn btn-primary btn-block btn-form">Login
                                        </button>
                                        <div className="loading-relative" id="login-loading" style={{display: "none"}}>
                                            <div className="loading">
                                                <div className="span1"></div>
                                                <div className="span2"></div>
                                                <div className="span3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer text-center">
                                Don't have an account? <a className="link-highlight register-tab-link">Register</a>
                            </div>
                        </div>

                        <div id="modal-tab-forgot" className="tab-pane fade">
                            <div className="modal-login-icon"><img src="/images/icon-forgot.png"/></div>
                            <div className="modal-header">
                                <h5 className="modal-title">Reset Password</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="description">We will send an email to your box, just follow that link to
                                    set your new password.
                                </div>
                                <form className="loginform" id="forgot-form" method="post">
                                    <div className="form-group w-icon">
                                        <input type="text" className="form-control" id="forgot-email"
                                               placeholder="Your username or email"/>
                                            <i className="fas fa-user"></i>
                                    </div>
                                    <div className="form-group login-btn mb-0">
                                        <a href="#" className="btn btn-primary btn-block btn-form">Reset</a>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer text-center">
                                <a className="link-highlight login-tab-link">Back to Sign-in</a>
                            </div>
                        </div>

                        <div id="modal-tab-register" className="tab-pane fade">
                            <div className="modal-login-icon"><img src="/images/icon-register.png"/></div>
                            <div className="modal-header">
                                <h5 className="modal-title">Register</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="description">When becoming members of the site, you could use the full
                                    range of functions.
                                </div>
                                <div className="alert alert-danger" id="register-error" style={{display: "none"}}></div>
                                <form className="loginform" method="post" id="register-form">
                                    <div className="form-group w-icon">
                                        <input type="text" className="form-control" id="re-username"
                                               placeholder="Your Name" name="name" required/>
                                            <i className="fas fa-user"></i>
                                    </div>
                                    <div className="form-group w-icon">
                                        <input type="text" className="form-control" id="re-email" placeholder="Email"
                                               name="email" required/>
                                            <i className="fas fa-envelope"></i>
                                    </div>
                                    <div className="form-group w-icon">
                                        <input type="password" className="form-control" id="re-password"
                                               placeholder="Your password" name="password" required/>
                                            <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="form-group w-icon">
                                        <input type="password" className="form-control" id="re-confirmpassword"
                                               placeholder="Repeat your password" required/>
                                            <i className="fas fa-lock"></i>
                                    </div>
                                    <div className="form-group login-btn mb-0">
                                        <button id="btn-register"
                                                className="btn btn-primary btn-block btn-form">Register
                                        </button>
                                        <div className="loading-relative" id="register-loading" style={{display: "none"}}>
                                            <div className="loading">
                                                <div className="span1"></div>
                                                <div className="span2"></div>
                                                <div className="span3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer text-center">
                                Have an account? <a className="link-highlight login-tab-link">Sign-in</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>


        <Tooltip title="qtip2" text="qtip2 is one of the tooltip library">
            <a href='qtip2.com/'>Go to Qtip2</a>
        </Tooltip>



    </>);
}