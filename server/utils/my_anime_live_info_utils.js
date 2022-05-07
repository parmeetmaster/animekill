const malScraper = require('mal-scraper');


const animeList2 = async () => {
    malScraper.getInfoFromURL('https://myanimelist.net/manga/79193/Doupo_Cangqiong')
        .then((data) => {
            console.log(data)
        })
        .catch((err) => console.log(err))

}

module.exports={animeList2};