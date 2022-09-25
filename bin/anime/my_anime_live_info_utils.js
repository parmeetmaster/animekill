const malScraper = require('mal-scraper');


const myAnimeParseAnimeTest = async () => {

    return await new Promise(function (resolve, reject) {
        malScraper.getInfoFromURL('https://myanimelist.net/anime/40839/Kanojo_Okarishimasu')
            .then((data) => {
                console.log(data)
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}


const myAnimeParseAnime = async (link) => {

    return await new Promise(function (resolve, reject) {
        malScraper.getInfoFromURL(link)
            .then((data) => {
                console.log(data)
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            })
    })
}

module.exports = {myAnimeParseAnime: myAnimeParseAnime, myAnimeParseAnimeTest: myAnimeParseAnimeTest    };