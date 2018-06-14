var twit = require('twit');
var config = require('./config.js');

var Twitter = new twit(config);

var favoriteTweet = function () {
    var params = {
        q: 'CoryMannion'
    };

    Twitter.get('search/tweets', params, function (err, data) {

        var tweets = data.statuses;

        /*
                for (var i = 0; i < tweets.length; i++) {
                    console.log(tweets[i].id);
                };

                // console.log(data.statuses[0].id);
        */

        if (tweets) {

            for (var i = 0; i < tweets.length; i++) {

                Twitter.post('favorites/create', {
                    id: tweets[i].id_str
                }, function (err, response) {
                    if (err) {
                        throw err;
                    } else {
                        console.log("SUCCESS!");
                    }
                });

            }

        }
    });
}

favoriteTweet();

setInterval(favoriteTweet, 3600000);