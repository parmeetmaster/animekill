var express = require('express');
var animeMobileRouter = express.Router();
var bodyParser = require('body-parser')
const {myAnimeParseAnime} = require("../../bin/anime/my_anime_live_info_utils");
const {performQuery} = require("../../utils/sql/sql_common_queries");
const {getAnimeList} = require("../../bin/anime/animekill_mobile_operation");
const {handleFailure} = require("../../utils/response_handle_utils/response_handle_utils");
const {handleSuccess} = require("../../utils/response_handle_utils/response_handle_utils");
const {jwtTokenVerifier} = require("../../bin/authentication/jwt_controller");
const Failure=require('../../models/core_models/failure_model')

// return all anime in database without offset
animeMobileRouter.get('/getAnimeListMobile', async function (req, res) {
    var offsetLimiter = 21;

    const query = "SELECT * FROM `AnimekillDetails` WHERE `type`='anime' " +
        "ORDER BY `AnimekillDetails`.`last_update`  DESC  LIMIT " + offsetLimiter + " OFFSET " + req.query.recordOffset + "";
    new Promise(function (mresolve, mreject) {
        performQuery(query).then(function resolve(result) {
                let anime = []
                result.forEach(function myFunction(item) {
                    anime.push(item);
                });
                res.json(handleSuccess("Anime parse successfully", req.path, {
                    recordOffset: parseInt(parseInt(req.query.recordOffset) + parseInt(offsetLimiter)),
                    animeList: anime
                }))
            }, function reject(error) {
                mreject(new Failure("failed to take anime list"))
            }
        )
    })
});

// return all movie in database without offset
animeMobileRouter.get('/getMovieListMobile', async function (req, res) {
    var offsetLimiter = 21;

    const query = "SELECT * FROM `AnimekillDetails` WHERE `type`='movie' " +
        "ORDER BY `AnimekillDetails`.`last_update`  DESC  LIMIT " + offsetLimiter + " OFFSET " + req.query.recordOffset + "";
    new Promise(function (mresolve, mreject) {
        performQuery(query).then(function resolve(result) {
                let anime = []
                result.forEach(function myFunction(item) {
                    anime.push(item);
                });
                res.json(handleSuccess("Anime parse successfully", req.path, {
                    recordOffset: parseInt(parseInt(req.query.recordOffset) + parseInt(offsetLimiter)),
                    animeList: anime
                }))
            }, function reject(error) {
                mreject(Failure("failed to take anime list"))
            }
        )
    })
});

// anime list using search keyword like "against"
animeMobileRouter.get('/searchAnimeMobile', async function (req, res) {
    const query = "SELECT * FROM `AnimekillDetails` WHERE `synoyms` LIKE '%" + req.query.keywords + "%'";
    new Promise(function (mresolve, mreject) {
        performQuery(query).then(function resolve(result) {
                let anime = []
                result.forEach(function myFunction(item) {
                    anime.push(item);

                });
                res.json(handleSuccess("Anime parse successfully", req.path, {animeList: anime}))
            }, function reject(error) {
                mreject(Failure("failed to take anime list"))
            }
        )
    })
})


animeMobileRouter.get('/getAnimeDetails', async function (req, res) {
    const query = "SELECT `mal_url` as animeUrl FROM `AnimekillDetails` WHERE `animeId`='"+req.query.animeId+"'";
    new Promise(function (mresolve, mreject) {
        performQuery(query).then(function resolve(result) {
                if(result==""){
                    res.json(handleFailure("No Data found", req.path));
                    return;
                }
                myAnimeParseAnime(result[0].animeUrl).then(function resolve(results) {
                    res.json(handleSuccess("Anime parse successfully", req.path, {animeDetails: results}));
                }, function reject(failure) {
                    res.json(handleFailure(failure.getMessage(), req.path));
                    console.log(`Here is error ${failure.getMessage()}`);
                })
                return;

            }, function reject(error) {
                mreject(Failure("failed to take anime details"))
            }
        )
    })
})



animeMobileRouter.get('/getAnimeListItem', async function (req, res) {


    const query = "SELECT * FROM `AnimekillDetails` WHERE `animeId`='"+req.query.animeId+"'";
    new Promise(function (mresolve, mreject) {
        performQuery(query).then(function resolve(result) {
                let anime = []
                result.forEach(function myFunction(item) {
                    anime.push(item);
                });
                res.json(handleSuccess("Anime parse successfully", req.path, result[0]))
            }, function reject(error) {
                mreject(new Failure("failed to take anime list"))
            }
        )
    })
});

module.exports = {animeMobileRouter}
