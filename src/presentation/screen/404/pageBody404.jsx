

export function PageBody404() {

    return(<>

        <div id="main-wrapper" className="layout-page layout-page-404">
            <div className="container">
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