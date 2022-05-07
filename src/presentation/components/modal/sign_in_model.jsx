import React from "react";


export default function SignInModel() {

    return(<>
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
                                <div className="description">AnimeKill - a better place to watch anime online for free!
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

    </>)

}

