

import React from "react";


export default function Footer() {

    return(<>
        <div id="footer">
            <div className="container">
                <div className="footer-icon"><img src="/images/footer-icon.png" alt="AnimeKill"/></div>
                <div className="footer-toggle-block">
                    <div className="toggle-footer">
                        <div className="tf-item">
                            <div className="toggle-onoff size-s off select-anime-name"><span></span></div>
                            <div className="name">EN/JP</div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                </div>
                <div className="footer-az">
                    <div className="block mb-2">
                        <span className="ftaz">A-Z LIST</span><span className="size-s">Searching anime order by alphabet name A to Z.</span>
                    </div>
                    <ul className="ulclear az-list">
                        <li><a href="/az-list">All</a></li>
                        <li><a href="/az-list/other">#</a></li>
                        <li><a href="/az-list/0-9">0-9</a></li>

                        <li><a href="/az-list/A">A</a>
                        </li>

                        <li><a href="/az-list/B">B</a>
                        </li>

                        <li><a href="/az-list/C">C</a>
                        </li>

                        <li><a href="/az-list/D">D</a>
                        </li>

                        <li><a href="/az-list/E">E</a>
                        </li>

                        <li><a href="/az-list/F">F</a>
                        </li>

                        <li><a href="/az-list/G">G</a>
                        </li>

                        <li><a href="/az-list/H">H</a>
                        </li>

                        <li><a href="/az-list/I">I</a>
                        </li>

                        <li><a href="/az-list/J">J</a>
                        </li>

                        <li><a href="/az-list/K">K</a>
                        </li>

                        <li><a href="/az-list/L">L</a>
                        </li>

                        <li><a href="/az-list/M">M</a>
                        </li>

                        <li><a href="/az-list/N">N</a>
                        </li>

                        <li><a href="/az-list/O">O</a>
                        </li>

                        <li><a href="/az-list/P">P</a>
                        </li>

                        <li><a href="/az-list/Q">Q</a>
                        </li>

                        <li><a href="/az-list/R">R</a>
                        </li>

                        <li><a href="/az-list/S">S</a>
                        </li>

                        <li><a href="/az-list/T">T</a>
                        </li>

                        <li><a href="/az-list/U">U</a>
                        </li>

                        <li><a href="/az-list/V">V</a>
                        </li>

                        <li><a href="/az-list/W">W</a>
                        </li>

                        <li><a href="/az-list/X">X</a>
                        </li>

                        <li><a href="/az-list/Y">Y</a>
                        </li>

                        <li><a href="/az-list/Z">Z</a>
                        </li>

                    </ul>
                    <div className="clearfix"></div>
                </div>
                <div className="footer-content">
                    <div className="footer-copyright float-left">
                        <a href="/" className="footer-logo">
                            <img src="/images/logo.png" alt="AnimeKill"/>
                        </a>
                        <div className="copyright">Copyright © <a style={{color: "#aaa"}} href="/">AnimeKill</a>. All Rights
                            Reserved
                        </div>
                        <div className="socials-group">
                            <div className="scg-list">
                                <div className="item"><a target="_blank" href="https://twitter.com/AnimeKillvc"
                                                         className="sc-social-button dc-btn"><i
                                    className="fab fa-twitter"></i></a></div>
                                <div className="item"><a href="#" className="sc-social-button tl-btn"><i
                                    className="fab fa-telegram-plane"></i></a></div>
                                <div className="item"><a href="#" className="sc-social-button rd-btn"><i
                                    className="fab fa-reddit-alien"></i></a></div>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                        <div className="disclaimer small">Disclaimer: This site does not store any files on its server.
                            All contents
                            are provided by non-affiliated third parties.
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="footer-links float-left">
                        <ul className="ulclear">
                            <li className="title">Help</li>
                            <li><a href="/contact" title="">Contact</a></li>
                            <li><a href="/faq" title="">FAQ</a></li>
                        </ul>
                        <ul className="ulclear">
                            <li className="title">Links</li>
                            <li><a href="/az-list" title="A-Z List">A-Z List</a></li>
                            <li><a href="/upcoming" title="Upcoming">Upcoming</a></li>
                            <li><a href="/most-popular" title="Most Popular">Most Popular</a></li>

                            <li><a href="https://mangareader.to" title="Mangareader" target="_blank">Mangareader</a>
                            </li>

                        </ul>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                </div>
            </div>
        </div>
    </>)

}