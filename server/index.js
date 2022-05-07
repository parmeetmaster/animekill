//const home_client=require('routes/anime_client/home/home_route')  ;

//var myRoutes = require('./homeroute');
var myRoutes = require('./routes/anime_client/home/home_route');

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4001;



app.use(myRoutes).listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});