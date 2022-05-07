export function GridBody() {

    return (<>

        <div id="main-wrapper">
            <div className="container">
                <div id="main-content">
                    <section className="block_area block_area-filter">
                        <div className="block_area-content">
                            <div className="sidebar-filter">
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Genre <span><span id="filter-genre-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div
                                        className="dropdown-menu dropdown-menu-native dropdown-menu-large dropdown-menu-filter">
                                        <ul className="ulclear ul-filter ul-4col">

                                            <li id="genre-1">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="1"
                                                           id="input-genre-1"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-1">Action</label>
                                                </div>
                                            </li>

                                            <li id="genre-2">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="2"
                                                           id="input-genre-2"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-2">Adventure</label>
                                                </div>
                                            </li>

                                            <li id="genre-3">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="3"
                                                           id="input-genre-3"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-3">Cars</label>
                                                </div>
                                            </li>

                                            <li id="genre-4">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="4"
                                                           id="input-genre-4"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-4">Comedy</label>
                                                </div>
                                            </li>

                                            <li id="genre-5">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="5"
                                                           id="input-genre-5"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-5">Dementia</label>
                                                </div>
                                            </li>

                                            <li id="genre-6">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="6"
                                                           id="input-genre-6"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-6">Demons</label>
                                                </div>
                                            </li>

                                            <li id="genre-8">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="8"
                                                           id="input-genre-8"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-8">Drama</label>
                                                </div>
                                            </li>

                                            <li id="genre-9">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="9"
                                                           id="input-genre-9"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-9">Ecchi</label>
                                                </div>
                                            </li>

                                            <li id="genre-10">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="10"
                                                           id="input-genre-10"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-10">Fantasy</label>
                                                </div>
                                            </li>

                                            <li id="genre-11">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="11"
                                                           id="input-genre-11"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-11">Game</label>
                                                </div>
                                            </li>

                                            <li id="genre-35">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="35"
                                                           id="input-genre-35"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-35">Harem</label>
                                                </div>
                                            </li>

                                            <li id="genre-13">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="13"
                                                           id="input-genre-13"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-13">Historical</label>
                                                </div>
                                            </li>

                                            <li id="genre-14">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="14"
                                                           id="input-genre-14"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-14">Horror</label>
                                                </div>
                                            </li>

                                            <li id="genre-44">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="44"
                                                           id="input-genre-44"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-44">Isekai</label>
                                                </div>
                                            </li>

                                            <li id="genre-43">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="43"
                                                           id="input-genre-43"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-43">Josei</label>
                                                </div>
                                            </li>

                                            <li id="genre-15">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="15"
                                                           id="input-genre-15"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-15">Kids</label>
                                                </div>
                                            </li>

                                            <li id="genre-16">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="16"
                                                           id="input-genre-16"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-16">Magic</label>
                                                </div>
                                            </li>

                                            <li id="genre-17">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="17"
                                                           id="input-genre-17"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-17">Martial Arts</label>
                                                </div>
                                            </li>

                                            <li id="genre-18">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="18"
                                                           id="input-genre-18"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-18">Mecha</label>
                                                </div>
                                            </li>



                                            <li id="genre-19">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="19"
                                                           id="input-genre-19"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-19">Music</label>
                                                </div>
                                            </li>

                                            <li id="genre-7">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="7"
                                                           id="input-genre-7"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-7">Mystery</label>
                                                </div>
                                            </li>

                                            <li id="genre-20">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="20"
                                                           id="input-genre-20"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-20">Parody</label>
                                                </div>
                                            </li>

                                            <li id="genre-39">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="39"
                                                           id="input-genre-39"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-39">Police</label>
                                                </div>
                                            </li>

                                            <li id="genre-40">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="40"
                                                           id="input-genre-40"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-40">Psychological</label>
                                                </div>
                                            </li>

                                            <li id="genre-22">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="22"
                                                           id="input-genre-22"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-22">Romance</label>
                                                </div>
                                            </li>

                                            <li id="genre-21">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="21"
                                                           id="input-genre-21"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-21">Samurai</label>
                                                </div>
                                            </li>

                                            <li id="genre-23">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="23"
                                                           id="input-genre-23"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-23">School</label>
                                                </div>
                                            </li>

                                            <li id="genre-24">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="24"
                                                           id="input-genre-24"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-24">Sci-Fi</label>
                                                </div>
                                            </li>

                                            <li id="genre-42">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="42"
                                                           id="input-genre-42"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-42">Seinen</label>
                                                </div>
                                            </li>

                                            <li id="genre-25">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="25"
                                                           id="input-genre-25"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-25">Shoujo</label>
                                                </div>
                                            </li>

                                            <li id="genre-26">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="26"
                                                           id="input-genre-26"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-26">Shoujo Ai</label>
                                                </div>
                                            </li>

                                            <li id="genre-27">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="27"
                                                           id="input-genre-27"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-27">Shounen</label>
                                                </div>
                                            </li>

                                            <li id="genre-28">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="28"
                                                           id="input-genre-28"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-28">Shounen Ai</label>
                                                </div>
                                            </li>

                                            <li id="genre-36">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="36"
                                                           id="input-genre-36"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-36">Slice of Life</label>
                                                </div>
                                            </li>

                                            <li id="genre-29">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="29"
                                                           id="input-genre-29"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-29">Space</label>
                                                </div>
                                            </li>

                                            <li id="genre-30">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="30"
                                                           id="input-genre-30"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-30">Sports</label>
                                                </div>
                                            </li>

                                            <li id="genre-31">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="31"
                                                           id="input-genre-31"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-31">Super Power</label>
                                                </div>
                                            </li>

                                            <li id="genre-37">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="37"
                                                           id="input-genre-37"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-37">Supernatural</label>
                                                </div>
                                            </li>

                                            <li id="genre-41">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="41"
                                                           id="input-genre-41"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-41">Thriller</label>
                                                </div>
                                            </li>

                                            <li id="genre-32">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="32"
                                                           id="input-genre-32"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-32">Vampire</label>
                                                </div>
                                            </li>

                                            <li id="genre-33">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="33"
                                                           id="input-genre-33"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-33">Yaoi</label>
                                                </div>
                                            </li>

                                            <li id="genre-34">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-genre" value="34"
                                                           id="input-genre-34"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-genre-34">Yuri</label>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">Country <span>All<i
                                        className="fas fa-angle-down ml-1"></i></span></div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Season <span><span id="filter-season-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-native dropdown-menu-filter">
                                        <ul className="ulclear ul-filter">

                                            <li id="season-1">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="1"
                                                           className="custom-control-input checkbox-season"
                                                           id="input-season-1"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-season-1">Spring</label>
                                                </div>
                                            </li>

                                            <li id="season-2">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="2"
                                                           className="custom-control-input checkbox-season"
                                                           id="input-season-2"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-season-2">Summer</label>
                                                </div>
                                            </li>

                                            <li id="season-3">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="3"
                                                           className="custom-control-input checkbox-season"
                                                           id="input-season-3"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-season-3">Fall</label>
                                                </div>
                                            </li>

                                            <li id="season-4">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="4"
                                                           className="custom-control-input checkbox-season"
                                                           id="input-season-4"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-season-4">Winter</label>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Year <span><span id="filter-year-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div
                                        className="dropdown-menu dropdown-menu-native dropdown-menu-medium dropdown-menu-filter">
                                        <ul className="ulclear ul-3col ul-filter">

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2022"
                                                           id="input-year-2022"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2022">2022</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2021"
                                                           id="input-year-2021"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2021">2021</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2020"
                                                           id="input-year-2020"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2020">2020</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2019"
                                                           id="input-year-2019"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2019">2019</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2018"
                                                           id="input-year-2018"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2018">2018</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2017"
                                                           id="input-year-2017"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2017">2017</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2016"
                                                           id="input-year-2016"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2016">2016</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2015"
                                                           id="input-year-2015"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2015">2015</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2014"
                                                           id="input-year-2014"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2014">2014</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2013"
                                                           id="input-year-2013"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2013">2013</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2012"
                                                           id="input-year-2012"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2012">2012</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2011"
                                                           id="input-year-2011"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2011">2011</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2010"
                                                           id="input-year-2010"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2010">2010</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2009"
                                                           id="input-year-2009"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2009">2009</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2008"
                                                           id="input-year-2008"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2008">2008</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2007"
                                                           id="input-year-2007"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2007">2007</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2006"
                                                           id="input-year-2006"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2006">2006</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2005"
                                                           id="input-year-2005"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2005">2005</label>
                                                </div>
                                            </li>

                                            <li>
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox"
                                                           className="custom-control-input checkbox-year" value="2004"
                                                           id="input-year-2004"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-year-2004">2004</label>
                                                </div>
                                            </li>




                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Type <span><span id="filter-type-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-native dropdown-menu-filter">
                                        <ul className="ulclear ul-filter">

                                            <li id="type-1">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="1"
                                                           className="custom-control-input checkbox-type"
                                                           id="input-type-1"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-type-1">Movie</label>
                                                </div>
                                            </li>

                                            <li id="type-2">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="2"
                                                           className="custom-control-input checkbox-type"
                                                           id="input-type-2"/>
                                                        <label className="custom-control-label" htmlFor="input-type-2">TV
                                                            Series</label>
                                                </div>
                                            </li>

                                            <li id="type-3">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="3"
                                                           className="custom-control-input checkbox-type"
                                                           id="input-type-3"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-type-3">OVA</label>
                                                </div>
                                            </li>

                                            <li id="type-4">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="4"
                                                           className="custom-control-input checkbox-type"
                                                           id="input-type-4"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-type-4">ONA</label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Status <span><span id="filter-status-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-native dropdown-menu-filter">
                                        <ul className="ulclear ul-filter">
                                            <li id="status-all">
                                                <div className="acustom custom-control custom-radio">
                                                    <input checked="" type="radio" value="all"
                                                           className="custom-control-input" name="radio-status"
                                                           id="input-status-all"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-status-all">All</label>
                                                </div>
                                            </li>

                                            <li id="status-1">
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="1" className="custom-control-input"
                                                           name="radio-status" id="input-status-1"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-status-1">Finished Airing</label>
                                                </div>
                                            </li>

                                            <li id="status-2">
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="2" className="custom-control-input"
                                                           name="radio-status" id="input-status-2"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-status-2">Currently Airing</label>
                                                </div>
                                            </li>

                                            <li id="status-3">
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="3" className="custom-control-input"
                                                           name="radio-status" id="input-status-3"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-status-3">Not yet aired</label>
                                                </div>
                                            </li>

                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Language <span><span id="filter-lang-selected">All</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-native dropdown-menu-filter">
                                        <ul className="ulclear ul-filter">
                                            <li id="lang-sub">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="sub"
                                                           className="custom-control-input checkbox-lang"
                                                           id="input-sub"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sub">Subbed</label>
                                                </div>
                                            </li>
                                            <li id="lang-dub">
                                                <div className="acustom custom-control custom-checkbox">
                                                    <input type="checkbox" value="dub"
                                                           className="custom-control-input checkbox-lang"
                                                           id="input-dub"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-dub">Dubbed</label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                                         className="btn btn-sm btn-filter">
                                        Sort <span><span id="filter-sort-selected">Default</span><i
                                        className="fas fa-angle-down ml-1"></i></span>
                                    </div>
                                    <div className="dropdown-menu dropdown-menu-native dropdown-menu-filter">
                                        <ul className="ulclear ul-filter">
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input checked="" type="radio" value="all"
                                                           className="custom-control-input" name="radio-sort"
                                                           id="input-sort-all"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-default">Default</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-recentlyUpdated"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-recentlyUpdated">Recently
                                                            Updated</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-recentlyAdded"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-recentlyAdded">Recently
                                                            Added</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-nameAZ"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-nameAZ">Name A-Z</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-mostWatched"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-mostWatched">Most Watched</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-score"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-score">Score</label>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="acustom custom-control custom-radio">
                                                    <input type="radio" value="all" className="custom-control-input"
                                                           name="radio-sort" id="input-sort-releasedDate"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="input-sort-releasedDate">Released Date</label>
                                                </div>
                                            </li>
                                        </ul>
                                        <div className="clearfix"></div>
                                    </div>
                                </div>
                                <div className="clearfix"></div>
                            </div>
                            <div className="filter-bottom">
                                <div id="sidebar-search">
                                    <div className="search-content">

                                        <input type="text" className="form-control search-input"
                                               placeholder="Search..."/>
                                    </div>
                                </div>
                                <div className="submit filter">
                                    <div className="btn btn-block btn-focus" id="btn-filter-submit"><i
                                        className="fas fa-filter mr-1"></i>Filter
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="block_area block_area-anime none-bg">
                        <div className="block_area-content block_area-list film_list film_list-grid">
                            <div className="film_list-wrap">

                                <div className="flw-item item-qtip" data-id="2150" data-hasqtip="0"
                                     aria-describedby="qtip-0">
                                    <div className="film-poster">
                                        <div className="tick-item tick-quality">HD</div>
                                        <div className="tick ltr">

                                            <div className="tick-item tick-sub">SUB</div>


                                        </div>

                                        <div className="tick rtl">
                                            <div className="tick-item tick-eps">

                                                Ep 12/12

                                            </div>
                                        </div>

                                        <img
                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/a2/ec/a2eca9955980e30a007f410a15aff4fd/a2eca9955980e30a007f410a15aff4fd.jpg"
                                            className="film-poster-img lazyloaded" alt="Battle Through the Heavens"
                                            src="https://img.bunnycdnn.ru/_r/300x400/100/a2/ec/a2eca9955980e30a007f410a15aff4fd/a2eca9955980e30a007f410a15aff4fd.jpg"/>
                                            <a href="/watch/battle-through-the-heavens-2150"
                                               className="film-poster-ahref"><i className="fas fa-play"></i></a>
                                    </div>
                                    <div className="film-detail">
                                        <h3 className="film-name"><a href="/watch/battle-through-the-heavens-2150"
                                                                     title="Battle Through the Heavens"
                                                                     className="dynamic-name"
                                                                     data-jname="Doupo Cangqiong">Battle Through the
                                            Heavens</a></h3>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>


                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="anime-pagination">
                            <div className="ap_-nav">
                                <div className="ap__-btn ap__-btn-prev"><a
                                    href="/search?keyword=battle through the heaven&amp;page=0"
                                    className="btn btn-sm btn-focus more-padding disabled"><i
                                    className="fas fa-angle-left"></i> Previous</a></div>
                                <div className="ap__-input">
                                    <div className="btn btn-sm btn-blank">page</div>
                                    <input className="form-control form-control-dark input-page" value="1"
                                           data-url="/search?keyword=battle through the heaven&amp;page="
                                           data-toggle="tooltip" data-placement="top" title="Enter a number"/>
                                        <button type="button" className="btn btn-sm btn-focus btn-go-page">go</button>
                                        <div className="btn btn-sm btn-blank">of 47</div></div>
                                <div className="ap__-btn ap__-btn-next"><a
                                    href="/search?keyword=battle through the heaven&amp;page=2"
                                    className="btn btn-sm btn-focus more-padding ">Next <i
                                    className="fas fa-angle-right"></i></a></div>
                            </div>
                        </div>
                    </section>

                    <div className="clearfix"></div>
                </div>

                <div id="main-sidebar">
                    <section className="block_area block_area_sidebar block_area-realtime">
                        <div className="block_area-header">
                            <div className="float-left bah-heading mr-2">
                                <h2 className="cat-heading">Top Anime</h2>
                            </div>
                            <div className="float-right bah-tab-min">
                                <ul className="nav nav-pills nav-fill nav-tabs anw-tabs">
                                    <li className="nav-item"><a data-toggle="tab" href="#top-viewed-day"
                                                                className="nav-link active">Today</a>
                                    </li>
                                    <li className="nav-item"><a data-toggle="tab" href="#top-viewed-week"
                                                                className="nav-link">Week</a></li>
                                    <li className="nav-item"><a data-toggle="tab" href="#top-viewed-month"
                                                                className="nav-link">Month</a></li>
                                </ul>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="block_area-content">
                            <div className="cbox cbox-list cbox-realtime">
                                <div className="cbox-content">
                                    <div className="tab-content">
                                        <div id="top-viewed-day"
                                             className="anime-block-ul anif-block-chart tab-pane active">
                                            <ul className="ulclear">

                                                <li className="item-top">
                                                    <div className="film-number"><span>1</span></div>
                                                    <div className="film-poster item-qtip" data-id="100"
                                                         data-hasqtip="30" aria-describedby="qtip-30">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="One Piece"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/one-piece-100" title="One Piece"
                                                               className="dynamic-name" data-jname="One Piece">One
                                                                Piece</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>24,254</span>

                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>2</span></div>
                                                    <div className="film-poster item-qtip" data-id="355"
                                                         data-hasqtip="31" aria-describedby="qtip-31">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Naruto: Shippuden"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/naruto-shippuden-355"
                                                               title="Naruto: Shippuden" className="dynamic-name"
                                                               data-jname="Naruto: Shippuuden">Naruto: Shippuden</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>10,314</span>

                                                        </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>3</span></div>
                                                    <div className="film-poster item-qtip" data-id="17977"
                                                         data-hasqtip="32" aria-describedby="qtip-32">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/14/3b/143b96f99bd676133f4213d91582105d/143b96f99bd676133f4213d91582105d.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Spy x Family"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/14/3b/143b96f99bd676133f4213d91582105d/143b96f99bd676133f4213d91582105d.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/spy-x-family-17977" title="Spy x Family"
                                                               className="dynamic-name" data-jname="Spy x Family">Spy x
                                                                Family</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>8,644</span>
                                                   </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>4</span></div>
                                                    <div className="film-poster item-qtip" data-id="17224"
                                                         data-hasqtip="33" aria-describedby="qtip-33">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/5b/0a/5b0a4b1b70e9e765a03bfa29ccdacb3f/5b0a4b1b70e9e765a03bfa29ccdacb3f.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Kaguya-sama Love is War: Ultra Romantic"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/5b/0a/5b0a4b1b70e9e765a03bfa29ccdacb3f/5b0a4b1b70e9e765a03bfa29ccdacb3f.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/kaguya-sama-love-is-war-ultra-romantic-17224"
                                                               title="Kaguya-sama Love is War: Ultra Romantic"
                                                               className="dynamic-name"
                                                               data-jname="Kaguya-sama wa Kokurasetai: Tensai-tachi no Renai Zunousen 3rd Season">Kaguya-sama
                                                                Love is War: Ultra Romantic</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>6,482</span>
                                                    </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>5</span></div>
                                                    <div className="film-poster item-qtip" data-id="2404"
                                                         data-hasqtip="34" aria-describedby="qtip-34">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/fe/f9/fef978948b50d1c4bb1c508acbf77249/fef978948b50d1c4bb1c508acbf77249.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Black Clover"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/fe/f9/fef978948b50d1c4bb1c508acbf77249/fef978948b50d1c4bb1c508acbf77249.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/black-clover-2404" title="Black Clover"
                                                               className="dynamic-name" data-jname="Black Clover">Black
                                                                Clover</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>5,321</span>
                                                    </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>6</span></div>
                                                    <div className="film-poster item-qtip" data-id="8143"
                                                         data-hasqtip="35" aria-describedby="qtip-35">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/05/4f/054ff70eabaeadc4ad9978054e274080/054ff70eabaeadc4ad9978054e274080.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Boruto: Naruto Next Generations"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/05/4f/054ff70eabaeadc4ad9978054e274080/054ff70eabaeadc4ad9978054e274080.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/boruto-naruto-next-generations-8143"
                                                               title="Boruto: Naruto Next Generations"
                                                               className="dynamic-name"
                                                               data-jname="Boruto: Naruto Next Generations">Boruto:
                                                                Naruto Next Generations</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>3,986</span>
                                                   </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>7</span></div>
                                                    <div className="film-poster item-qtip" data-id="806"
                                                         data-hasqtip="36" aria-describedby="qtip-36">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Bleach"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/bleach-806" title="Bleach"
                                                               className="dynamic-name" data-jname="Bleach">Bleach</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>3,940</span>
                                                     </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>8</span></div>
                                                    <div className="film-poster item-qtip" data-id="677"
                                                         data-hasqtip="37" aria-describedby="qtip-37">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Naruto"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/naruto-677" title="Naruto"
                                                               className="dynamic-name" data-jname="Naruto">Naruto</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>3,358</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>9</span></div>
                                                    <div className="film-poster item-qtip" data-id="17975"
                                                         data-hasqtip="38" aria-describedby="qtip-38">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/5c/94/5c946ba84494983519adbbb324095e42/5c946ba84494983519adbbb324095e42.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Komi-san wa, Comyushou desu. 2nd Season"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/5c/94/5c946ba84494983519adbbb324095e42/5c946ba84494983519adbbb324095e42.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/komi-san-wa-comyushou-desu-2nd-season-17975"
                                                               title="Komi-san wa, Comyushou desu. 2nd Season"
                                                               className="dynamic-name"
                                                               data-jname="Komi-san wa, Comyushou desu. 2nd Season">Komi-san
                                                                wa, Comyushou desu. 2nd Season</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>3,058</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>10</span></div>
                                                    <div className="film-poster item-qtip" data-id="17483"
                                                         data-hasqtip="39" aria-describedby="qtip-39">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/3e/13/3e13d0ab2ce8799c9da8ed59548b96e9/3e13d0ab2ce8799c9da8ed59548b96e9.jpg"
                                                            className="film-poster-img ls-is-cached lazyloaded"
                                                            alt="Demon Slayer: Entertainment District Arc"
                                                            src="https://img.bunnycdnn.ru/_r/300x400/100/3e/13/3e13d0ab2ce8799c9da8ed59548b96e9/3e13d0ab2ce8799c9da8ed59548b96e9.jpg"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/demon-slayer-entertainment-district-arc-17483"
                                                               title="Demon Slayer: Entertainment District Arc"
                                                               className="dynamic-name"
                                                               data-jname="Kimetsu no Yaiba: Yuukaku-hen">Demon Slayer:
                                                                Entertainment District Arc</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>3,049</span>
                                                     </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div id="top-viewed-week" className="anime-block-ul anif-block-chart tab-pane">
                                            <ul className="ulclear">

                                                <li className="item-top">
                                                    <div className="film-number"><span>1</span></div>
                                                    <div className="film-poster item-qtip" data-id="100"
                                                         data-hasqtip="40" aria-describedby="qtip-40">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
                                                            className="film-poster-img lazyload" alt="One Piece"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/one-piece-100" title="One Piece"
                                                               className="dynamic-name" data-jname="One Piece">One
                                                                Piece</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>492,686</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>2</span></div>
                                                    <div className="film-poster item-qtip" data-id="17977"
                                                         data-hasqtip="41" aria-describedby="qtip-41">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/14/3b/143b96f99bd676133f4213d91582105d/143b96f99bd676133f4213d91582105d.jpg"
                                                            className="film-poster-img lazyload" alt="Spy x Family"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/spy-x-family-17977" title="Spy x Family"
                                                               className="dynamic-name" data-jname="Spy x Family">Spy x
                                                                Family</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>256,101</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>



                                                <li className="">
                                                    <div className="film-number"><span>8</span></div>
                                                    <div className="film-poster item-qtip" data-id="677"
                                                         data-hasqtip="47" aria-describedby="qtip-47">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
                                                            className="film-poster-img lazyload" alt="Naruto"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/naruto-677" title="Naruto"
                                                               className="dynamic-name" data-jname="Naruto">Naruto</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>64,009</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>9</span></div>
                                                    <div className="film-poster item-qtip" data-id="534"
                                                         data-hasqtip="48" aria-describedby="qtip-48">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Jujutsu Kaisen (TV)"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/jujutsu-kaisen-tv-534"
                                                               title="Jujutsu Kaisen (TV)" className="dynamic-name"
                                                               data-jname="Jujutsu Kaisen (TV)">Jujutsu Kaisen (TV)</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>57,830</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>10</span></div>
                                                    <div className="film-poster item-qtip" data-id="17753"
                                                         data-hasqtip="49" aria-describedby="qtip-49">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/16/08/160831b6a0c1303e1439925d8f8c7395/160831b6a0c1303e1439925d8f8c7395.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Attack on Titan: Final Season, Part 2"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/attack-on-titan-final-season-part-2-17753"
                                                               title="Attack on Titan: Final Season, Part 2"
                                                               className="dynamic-name"
                                                               data-jname="Shingeki no Kyojin: The Final Season Part 2">Attack
                                                                on Titan: Final Season, Part 2</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>54,981</span>
                                                       </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div id="top-viewed-month" className="anime-block-ul anif-block-chart tab-pane">
                                            <ul className="ulclear">

                                                <li className="item-top">
                                                    <div className="film-number"><span>1</span></div>
                                                    <div className="film-poster item-qtip" data-id="100"
                                                         data-hasqtip="50" aria-describedby="qtip-50">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/54/90/5490cb32786d4f7fef0f40d7266df532/5490cb32786d4f7fef0f40d7266df532.jpg"
                                                            className="film-poster-img lazyload" alt="One Piece"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/one-piece-100" title="One Piece"
                                                               className="dynamic-name" data-jname="One Piece">One
                                                                Piece</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>1,855,165</span>
                                                       </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>2</span></div>
                                                    <div className="film-poster item-qtip" data-id="17977"
                                                         data-hasqtip="51" aria-describedby="qtip-51">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/14/3b/143b96f99bd676133f4213d91582105d/143b96f99bd676133f4213d91582105d.jpg"
                                                            className="film-poster-img lazyload" alt="Spy x Family"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/spy-x-family-17977" title="Spy x Family"
                                                               className="dynamic-name" data-jname="Spy x Family">Spy x
                                                                Family</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>826,025</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>3</span></div>
                                                    <div className="film-poster item-qtip" data-id="355"
                                                         data-hasqtip="52" aria-describedby="qtip-52">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/9c/bc/9cbcf87f54194742e7686119089478f8/9cbcf87f54194742e7686119089478f8.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Naruto: Shippuden"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/naruto-shippuden-355"
                                                               title="Naruto: Shippuden" className="dynamic-name"
                                                               data-jname="Naruto: Shippuuden">Naruto: Shippuden</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>806,643</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>4</span></div>
                                                    <div className="film-poster item-qtip" data-id="2404"
                                                         data-hasqtip="53" aria-describedby="qtip-53">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/fe/f9/fef978948b50d1c4bb1c508acbf77249/fef978948b50d1c4bb1c508acbf77249.jpg"
                                                            className="film-poster-img lazyload" alt="Black Clover"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/black-clover-2404" title="Black Clover"
                                                               className="dynamic-name" data-jname="Black Clover">Black
                                                                Clover</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>418,181</span>
                                                       </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>5</span></div>
                                                    <div className="film-poster item-qtip" data-id="8143"
                                                         data-hasqtip="54" aria-describedby="qtip-54">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/05/4f/054ff70eabaeadc4ad9978054e274080/054ff70eabaeadc4ad9978054e274080.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Boruto: Naruto Next Generations"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/boruto-naruto-next-generations-8143"
                                                               title="Boruto: Naruto Next Generations"
                                                               className="dynamic-name"
                                                               data-jname="Boruto: Naruto Next Generations">Boruto:
                                                                Naruto Next Generations</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>349,730</span>
                                                       </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>6</span></div>
                                                    <div className="film-poster item-qtip" data-id="17753"
                                                         data-hasqtip="55" aria-describedby="qtip-55">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/16/08/160831b6a0c1303e1439925d8f8c7395/160831b6a0c1303e1439925d8f8c7395.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Attack on Titan: Final Season, Part 2"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/attack-on-titan-final-season-part-2-17753"
                                                               title="Attack on Titan: Final Season, Part 2"
                                                               className="dynamic-name"
                                                               data-jname="Shingeki no Kyojin: The Final Season Part 2">Attack
                                                                on Titan: Final Season, Part 2</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>327,869</span>
                                                   </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>7</span></div>
                                                    <div className="film-poster item-qtip" data-id="17483"
                                                         data-hasqtip="56" aria-describedby="qtip-56">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/3e/13/3e13d0ab2ce8799c9da8ed59548b96e9/3e13d0ab2ce8799c9da8ed59548b96e9.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Demon Slayer: Entertainment District Arc"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/demon-slayer-entertainment-district-arc-17483"
                                                               title="Demon Slayer: Entertainment District Arc"
                                                               className="dynamic-name"
                                                               data-jname="Kimetsu no Yaiba: Yuukaku-hen">Demon Slayer:
                                                                Entertainment District Arc</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>314,241</span>
                                                       </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>8</span></div>
                                                    <div className="film-poster item-qtip" data-id="806"
                                                         data-hasqtip="57" aria-describedby="qtip-57">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/bd/5a/bd5ae1d387a59c5abcf5e1a6a616728c/bd5ae1d387a59c5abcf5e1a6a616728c.jpg"
                                                            className="film-poster-img lazyload" alt="Bleach"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/bleach-806" title="Bleach"
                                                               className="dynamic-name" data-jname="Bleach">Bleach</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>311,610</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>9</span></div>
                                                    <div className="film-poster item-qtip" data-id="534"
                                                         data-hasqtip="58" aria-describedby="qtip-58">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/82/40/82402f796b7d84d7071ab1e03ff7747a/82402f796b7d84d7071ab1e03ff7747a.jpg"
                                                            className="film-poster-img lazyload"
                                                            alt="Jujutsu Kaisen (TV)"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/jujutsu-kaisen-tv-534"
                                                               title="Jujutsu Kaisen (TV)" className="dynamic-name"
                                                               data-jname="Jujutsu Kaisen (TV)">Jujutsu Kaisen (TV)</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>274,941</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                                <li className="">
                                                    <div className="film-number"><span>10</span></div>
                                                    <div className="film-poster item-qtip" data-id="677"
                                                         data-hasqtip="59" aria-describedby="qtip-59">
                                                        <img
                                                            data-src="https://img.bunnycdnn.ru/_r/300x400/100/5d/b4/5db400c33f7494bc8ae96f9e634958d0/5db400c33f7494bc8ae96f9e634958d0.jpg"
                                                            className="film-poster-img lazyload" alt="Naruto"/>
                                                    </div>
                                                    <div className="film-detail">
                                                        <h3 className="film-name">
                                                            <a href="/watch/naruto-677" title="Naruto"
                                                               className="dynamic-name" data-jname="Naruto">Naruto</a>
                                                        </h3>
                                                        <div className="fd-infor">
                                                            <span className="fdi-item mr-2"><i
                                                                className="fas fa-eye mr-1"></i>264,545</span>
                                                      </div>
                                                    </div>
                                                    <div className="clearfix"></div>
                                                </li>

                                            </ul>
                                        </div>
                                        <div className="clearfix"></div>
                                    </div>
                                    <div className="clearfix"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="clearfix"></div>
            </div>
        </div>

    </>)

}
