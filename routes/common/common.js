var express = require('express');
const {performLogin} = require("../../bin/authentication/authentication");
var commonRoute = express.Router();
const {handleFailure} = require("../../utils/response_handle_utils/response_handle_utils");
const {handleSuccess} = require("../../utils/response_handle_utils/response_handle_utils");
const {jwtTokenGenerator, jwtTokenVerifier} = require("../../bin/authentication/jwt_controller");


commonRoute.get('*', function (req, res) {
    res.statusCode = 404;
    res.json(handleFailure("Route not found", req.path,))
});

commonRoute.post('*', function (req, res) {
    res.statusCode = 404;
    res.json(handleFailure("Route not found", req.path,))
});


module.exports = commonRoute;
