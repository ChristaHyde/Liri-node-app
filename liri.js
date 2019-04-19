require("dotenv").config();

var axios = require("axios");

var Spotify = require('node-spotify-api');

var keys = require("./keys.js");

var fs = require("fs");

var command = process.argv[2];
var query = process.argv.slice(3).join(" ");

if (command === "spotify-this") {
    console.log("running-spotify");
    var spotify = new Spotify(keys.spotify);
    // console.log(keys);

    spotify.search({ type: 'track', query: query }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        console.log("----");
        console.log(data.tracks.items[0].artists[0].name);
        console.log(data.tracks.items[0].name);
        console.log(data.tracks.items[0].album.name);
        console.log(data.tracks.items[0].album.external_urls.spotify);
        console.log("----");
    });
} else if (command === "concert-this") {
    console.log("running-concert");
    axios.get("https://rest.bandsintown.com/artists/" + query + "/events?app_id=codingbootcamp")
        .then(function (response) {
            var concerts = response.data;
            for (var i = 0; i < concerts.length; i++) {
                console.log("----");
                console.log(concerts[i].venue.name);
                console.log(concerts[i].venue.city);
                console.log(concerts[i].datetime);
                console.log("----");
            }
        })
        .catch(function (error) {
            console.log(error);
        });

} else if (command === "movie-this") {
    axios.get('http://www.omdbapi.com/?apikey=trilogy&t=' + query)
        .then(function (response) {
            // console.log(response.data);
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
    // console.log("running-movie");

} else if (command === "do-what-it-says") {
    fs.readFile("random.txt", "utf8", function (err, data) {
        if (err) {
            return console.log(err);
        }
        console.log(data.split(","));
        var randomtextarray = data.split(",");
        var command = randomtextarray[0];
        var search = randomtextarray[1];

        console.log(command);
        console.log(search);
    })
    // console.log(process.argv);
}








