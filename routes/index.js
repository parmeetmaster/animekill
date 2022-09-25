var express = require('express');
const {myAnimeParseAnimeTest} = require("../bin/anime/my_anime_live_info_utils");
const {myAnimeParseAnime} = require("../bin/anime/my_anime_live_info_utils");
var router = express.Router();

/* GET home page. */
router.get('/watchAnime', function (req, res, next) {
    myAnimeParseAnimeTest().then(function resolve(results) {
        res.json({message: results})
    }, function reject(failure) {
        res.json({message: failure.getMessage()})
        console.log(`Here is error ${failure.getMessage()}`);
    })
});

module.exports = router;
