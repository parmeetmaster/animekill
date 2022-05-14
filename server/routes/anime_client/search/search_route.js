const {searchResult} = require('../../../sql/search_anime_wrapper');

require('dotenv').config()
const searchRoute = require('express').Router();


searchRoute.get("/search", (req, res) => {
    console.log(req.query.keyword);
     let result= searchResult(req.query.keyword);

     res.json(result[0])


});


module.exports = searchRoute;