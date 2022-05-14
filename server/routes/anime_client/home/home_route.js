const {animeList} = require('../../../sql/sql_wrapper');
const {searchResult} = require('../../../sql/search_anime_wrapper');
const {animeList2} = require('../../../utils/my_anime_live_info_utils');
require('dotenv').config()
const router = require('express').Router();


router.get("/", (req, res) =>{

    console.log(`${process.env.S3_BUCKET}`)

      animeList2()

  /*  animeList().then(function resolve(results) {
        res.json({message:results.length})
    }, function reject(failure) {
        res.json({message:failure.getMessage()})
       console.log(`Here is error ${failure.getMessage()}`);
    });*/
});






module.exports = router;