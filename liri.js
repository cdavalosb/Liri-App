var keys = require('./key.js');
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');

var spotify = new Spotify({
  id: 'a0efd2f2208a4163b4783fb27ce5bc4f',
  secret: "f3f7f884a9304e4c86fe099ccff3f0b5"
});

//console.log(keys);
var getMyTweets = function () {
      var client = new Twitter(keys.twitterKeys);

      var params = {screen_name: 'dava1os', count: 11};
      client.get('statuses/user_timeline', params, function(error, tweets, response){
      //console.log("TEST_");
      	if (!error) {
      		//console.log(error);
          for(var i=0; i < tweets.length; i++) {
            console.log(tweets[i].created_at);
            console.log(" ");
            console.log(tweets[i].text);
          }
      	}

      });
};

var getArtistNames = function(artist) {
  return artist.name;
};

var getMeSpotify = function(songName) {
  spotify.search({ type: "track", query: songName}, function(err, data) {
    if (err) {
      console.log("Errod occurred: " + err);
      return;
    }
    var songs = data.tracks.items;
    for(var i=0; i < songs.length; i++) {
      console.log(i);
      console.log("artist(s): " + songs[i].artists.map(
      getArtistNames));
      console.log("song name: " + songs[i].name);
      console.log("preview song: " + songs[i].preview_url);
      console.log("album: " + songs[i].album.name);
      console.log("--------------------------------");
    }
  });
};


var pick = function(caseData, functionData) {
      switch(caseData) {
        case "my-tweets" :
          getMyTweets();
          break;
        default:
        console.log("LIRI is confused");
      }
};

var runThis = function(argOne, argTwo) {
  pick(argOne, argTwo);
};

runThis(process.argv[2], process.argv[3]);


////////////////////////////////
////////////////////////////////




var spotify = new Spotify({
  id: 'a0efd2f2208a4163b4783fb27ce5bc4f',
  secret: "f3f7f884a9304e4c86fe099ccff3f0b5"
});

// // spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
// //   if (err) {
// //     console.log('Error occurred: ' + err);
// //     return;
// //   }
//
// console.log(data.tracks.items[0]);
// });
