var express = require('express');
var router = express.Router();
var unirest = require('unirest')
const XRapidAPIKey = 'f5108f6b7amsh47d0c6b24fd043fp112deejsn6c9a6fd2d106'

/* GET home page. */
router.get('/', function (req, res, next) {
  let r;
  unirest.get("https://devru-bigflix-movies-download-v1.p.rapidapi.com/movieDetails.php?movieid=16461")
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(function (result) {
    res.status(200).send(result);
    });
});

module.exports = router;
