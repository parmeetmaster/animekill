var express = require('express');
const {performLogin} = require("../../bin/authentication/authentication");
var authRoute = express.Router();
const {handleFailure} = require("../../utils/response_handle_utils/response_handle_utils");
const {handleSuccess} = require("../../utils/response_handle_utils/response_handle_utils");
const {jwtTokenGenerator, jwtTokenVerifier} = require("../../bin/authentication/jwt_controller");


authRoute.post('/login', async function (req, res) {
    var response = await performLogin(req.body.email, req.body.password);
    console.log(req.body);      // your JSON
    console.log(response[0].email);
    if (response[0].email == req.body.email && response[0].password == req.body.password) {
        jwtTokenGenerator(req.body.email, req.body.password).then(function resolve(generated_token) {
            res.statusCode = 200;
            res.json(handleSuccess("login Success", req.path, {"token": generated_token}))
        }, function reject(e) {
            res.statusCode = 400
            res.json(handleFailure("token generation failed", req.path,))
        });

    } else {
        res.statusCode = 400
        res.json(handleFailure("Invalid Authentication Credentials", req.path,))
    }

});

authRoute.post('/checkTokenValid', async function (req, res) {

    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve(data) {
        res.statusCode = 200;
        res.json(handleSuccess("Token is valid", req.path))
    }, function reject(err) {
        res.statusCode = 403
        var resp = handleFailure(err.getMessage(), req.path,)
        res.json(resp)
    })
});


module.exports = authRoute;
