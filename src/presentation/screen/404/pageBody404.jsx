

export function PageBody404() {

    return(<>

        <div id="main-wrapper" className="layout-page layout-page-404">
            <div className="container">
                <iframe sandbox="allow-forms allow-pointer-lock allow-same-origin allow-scripts allow-top-navigation"
                        width="1000" height="600" src="https://goload.pro/streaming.php?id=MTg2NDA0&title=Daikyouryuu+Jidai&typesub=SUB&sub=&cover=Y292ZXIvZGFpa3lvdXJ5dXUtamlkYWkucG5n" frameBorder="0"
                        gesture="media" allow="encrypted-media" allowFullScreen allow="autoplay" allowfullscreen="" data-ex-slot-check="iframe_ex_slot_1"></iframe>



                <div className="container-404 text-center">
                    <div className="c4-big">404</div>
                    <div className="c4-medium">Oops, sorry we can't find that page!</div>
                    <div className="c4-small">Either something went wrong or the page doesn't exist anymore.</div>
                    <div className="c4-button">
                        <a href="/home" className="btn btn-sm btn-focus"><i
                            className="fa fa-chevron-circle-left mr-2"></i>Back to home page</a>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </>)

}