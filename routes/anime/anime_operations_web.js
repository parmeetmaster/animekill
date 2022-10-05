var express = require('express');
var animeRouter = express.Router();
var bodyParser = require('body-parser')
const {firebaseMessenging} = require("../../utils/firebase/firebase_messenging");


const {performQuery} = require("../../utils/sql/sql_common_queries");
const {getAnimeList} = require("../../bin/anime/animekill_mobile_operation");
const {handleFailure} = require("../../utils/response_handle_utils/response_handle_utils");
const {handleSuccess} = require("../../utils/response_handle_utils/response_handle_utils");
const {jwtTokenVerifier} = require("../../bin/authentication/jwt_controller");


// return all anime in database without offset
animeRouter.get('/getAnimeList', async function (req, res) {
    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve() {
        const query = "SELECT * FROM `AnimekillDetails`";
        new Promise(function (mresolve, mreject) {
            performQuery(query).then(function resolve(result) {
                    let anime = []
                    result.forEach(function myFunction(item) {
                        anime.push({"label": item["name"], "value": item.animeId});
                    });
                    res.json(handleSuccess("Anime parse successfully", req.path, {animeList: anime}))
                }, function reject(error) {
                    mreject(Failure("failed to take anime list"))
                }
            )
        })
    }, function reject(s) {
        res.statusCode = 403;
        res.json(handleFailure("token invalid", req.path,))
    });
});

// anime list using search keyword like "against"
animeRouter.get('/getAnimeListUsingSearch', async function (req, res) {
    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve() {
        //  const query = "SELECT * FROM `AnimekillDetails` WHERE `synoyms` LIKE '%" + req.query.keywords + "%'";
        const query2 = "SELECT * FROM `AnimekillDetails` WHERE match(`synoyms`) against('+" + req.query.keywords + "sky ' IN BOOLEAN MODE)";
        
        new Promise(function (mresolve, mreject) {
            performQuery(query2).then(function resolve(result) {
                    let anime = []
                    result.forEach(function myFunction(item) {
                        // anime.push({"label": ["name"], "value": item.animeId});
                        anime.push(item);
                    });
                    res.json(handleSuccess("Anime parse successfully", req.path, {animeList: anime}))
                }, function reject(error) {
                    mreject(Failure("failed to take anime list"))
                }
            )
        })
    }, function reject(s) {
        res.statusCode = 403;
        res.json(handleFailure("token invalid", req.path,))
    });
});

animeRouter.get('/getMaxEpisode', async function (req, res) {
    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve() {
        const query = "SELECT MAX(`episode_number`) as episode_number FROM `animekill_data` WHERE `animeId` = '" + req.query.animeId + "'";
        new Promise(function (mresolve, mreject) {
            performQuery(query).then(function resolve(result) {
                    if (result[0].episode_number == null) {
                        res.statusCode = 400;
                        res.json(handleFailure("Anime not exist",
                            req.path,))
                        return;
                    }
                    res.statusCode = 200;
                    res.json(handleSuccess("Anime parse successfully",
                        req.path, {"episode_number": result[0].episode_number}))
                }, function reject(error) {
                    mreject(Failure("failed to take anime list"))
                }
            )
        })
    }, function reject(s) {
        res.statusCode = 403;
        res.json(handleFailure("token invalid", req.path,))
    });
});


animeRouter.post('/insertEpisode', async function (req, res) {
    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve() {
        const query = "INSERT INTO `animekill_data` (`id`, `anime_slug`, `iframe_url`, `iframe_url_2`, `thumbnail`, `date`, `animeId`, `episode_number`)" +
            " VALUES (NULL, '" + req.body.animeSlug + "', '" + req.body.mainIframe + "'," +
            " '" + JSON.stringify(req.body.animeIframeLinks) + "', '', CURRENT_TIMESTAMP, '" + req.body.animeId + "', '" + req.body.episodeNo + "');" +
            "UPDATE `AnimekillDetails` SET `last_update` = CURRENT_TIMESTAMP WHERE `AnimekillDetails`.`animeId` = '" + req.body.animeId + "'" + "";
        new Promise(function (mresolve, mreject) {
            performQuery(query).then(function resolve(result) {
                    res.json(handleSuccess("response add successfully", req.path,))
                }, function reject(error) {
                    res.statusCode = 400;
                    res.json(handleFailure(error.getMessage(), req.path,))
                }
            )
        })
    }, function reject(s) {
        res.statusCode = 403;
        res.json(handleFailure("token invalid", req.path,))
    });
});

// adding new anime

animeRouter.post('/insertNewAnime', async function (req, res) {
    jwtTokenVerifier(req.headers["authtoken"]).then(function resolve() {

        const query = "INSERT INTO `AnimekillDetails` (`sno`, `name`, `image_url`," +
            " `animeId`, `synoyms`, `mal_url`, `last_update`, `type`)" +
            " VALUES (NULL, '" + req.body.animename + "', '" + req.body.thumbnail + "'," +
            " '" + req.body.animeid + "', '" + req.body.synonyms + "'," +
            " '" + req.body.malUrl + "'," +
            " CURRENT_TIMESTAMP," +
            " '" + req.body.type + "');";
        new Promise(function (mresolve, mreject) {
            performQuery(query).then(function resolve(result) {
                    res.json(handleSuccess("response add successfully", req.path,))
                }, function reject(error) {
                    res.statusCode = 400;
                    res.json(handleFailure(error.getMessage(), req.path,))
                }
            )
        })
    }, function reject(s) {
        res.statusCode = 403;
        res.json(handleFailure("token invalid", req.path,))
    });
});


module.exports = {animeRouter}
