//Packages are grabbed using requre//
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

//Configure the app
app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

ig.use({
    access_token: '178910793.1677ed0.8216057eb94343078fe17f2d13391b93',
})
app.get('/', function (req, res) {
    ig.user_self_media_recent(function (err, medias, pagination, remaining, limit) {
        res.render('pages/index', { grams: medias });
    });
});

app.listen(8080);
console.log('App started at http://localhost:8080');