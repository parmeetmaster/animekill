//const home_client=require('routes/anime_client/root/home_route')  ;
var bodyParser = require('body-parser')
var cors = require('cors')
var mainRoute = require('../routes/index');
var authRoute = require('../routes/authentication/auth');
var commonRoute = require('../routes/common/common');
const express = require("express");

var winston = require('winston'), expressWinston = require('express-winston');
const {animeRouter} = require("../routes/anime/anime_operations");
var app = express()

const PORT = process.env.PORT || 3000;
jsonParser = bodyParser.json({type: 'application/*+json'})


app.use(cors());


app.use(express.json());
app.use(expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.json()
    ),
    meta: true, // optional: control whether you want to log the meta data about the request (default to true)
    msg: "HTTP {{req.method}} {{req.url}}", // optional: customize the default logging message. E.g. "{{res.statusCode}} {{req.method}} {{res.responseTime}}ms {{req.url}}"
    expressFormat: true, // Use the default Express/morgan request formatting. Enabling this will override any msg if true. Will only output colors with colorize set to true
    colorize: false, // Color the text and status code, using the Express/morgan color palette (text: gray, status: default green, 3XX cyan, 4XX yellow, 5XX red).
    ignoreRoute: function (req, res) {
        return false;
    } // optional: allows to skip some log messages based on request and/or response
}));




app.use([mainRoute, authRoute, animeRouter,commonRoute]).listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});