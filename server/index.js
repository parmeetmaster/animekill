//const home_client=require('routes/anime_client/home/home_route')  ;

//var myRoutes = require('./homeroute');
var myRoutes = require('./routes/anime_client/home/home_route');
var searchRoute = require('./routes/anime_client/search/search_route');
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;



app.use([myRoutes,searchRoute]).listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});