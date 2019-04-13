require("dotenv").config();

var axios = require("axios");

var Spotify = require('node-spotify-api');

var Concert = require("codingbootcamp");

var keys = require("./keys.js");

var command = process.argv[2];
var query = process.argv.slice(3).join(" ");
console.log(command);
console.log(query);

if (command === "spotify-this") {
    console.log("running-spotify");
    var spotify = new Spotify(keys.spotify);
    // console.log(keys);

    spotify.search({ type: 'track', query: query }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        console.log(data.tracks.items[0].album.artists);
    });
} else if (command === "concert-this") {
    console.log("running-concert");
    queryURL("https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp")
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });

} else if (command === "movie-this") {
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t=' + query)
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    console.log("running-movie");

} else (command === "do-what-it-says") {

}





console.log(process.argv);




// `concert-this`

//     `spotify-this-song`

//     `movie-this`

//     `do-what-it-says`

