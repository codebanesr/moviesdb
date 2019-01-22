var express = require('express');
var router = express.Router();
var unirest = require('unirest')
const XRapidAPIKey = 'f5108f6b7amsh47d0c6b24fd043fp112deejsn6c9a6fd2d106'

/* GET home page. */
router.get('/', function (req, res, next) {
  unirest.get("https://devru-bigflix-movies-download-v1.p.rapidapi.com/movieDetails.php?movieid=16461")
    .header("X-RapidAPI-Key", XRapidAPIKey)
    .end(function (result) {
      console.log(result.status, result.headers, result.body);
    });
  res.render('index', { title: 'Express' });
});

module.exports = router;
