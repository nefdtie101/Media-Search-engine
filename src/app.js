// This server will fetch data from itunes
const express = require("express");
const helmet = require("helmet");
const app = express();
const PORT = process.env.PORT || 3001;
app.use(helmet());
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
require('isomorphic-fetch')

//This will get info on a movie if the user types in the name of the movie.
app.get('/movies/',function (req,res){
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=ZA&media=movie`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(movie =>{
               finalist.push({
                   name:movie.trackName,
                   trailer:movie.previewUrl,
                   poster:movie.artworkUrl100,
                   genre:movie.primaryGenreName,
                   age:movie.contentAdvisoryRating,
                   description:movie.shortDescription
               })
            })
            let movie = {movie:finalist}
            res.send(JSON.stringify(movie))
        }),
        (error)=>{
        res.send(error)
        }
});

//This will get tv episode shows details
app.get('/shows/',function (req,res){

    fetch(`https://itunes.apple.com/search?term=${req.query.name}&media=tvShow`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(episodes =>{
                finalist.push({
                    show:episodes.artistName,
                    episode:episodes.trackNumber,
                    trailer:episodes.previewUrl,
                    poster:episodes.artworkUrl100,
                    description:episodes.shortDescription
                })
            })
            let episode = {"shows":finalist}
            res.send(JSON.stringify(episode))
        }),
        (error)=>{
            res.send(error)
        }
});
//This will get audiobook details
app.get('/audiobook/',function (req,res){
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=audiobook`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(audiobook =>{
                finalist.push({
                    book:audiobook.collectionName,
                    poster:audiobook.artworkUrl100,
                    description:audiobook.shortDescription
                })
            })
            let audiobook = {"audiobook":finalist}
            res.send(JSON.stringify(audiobook))
        }),
        (error)=>{
            res.send(error)
        }
});
//This will get ebook details
app.get('/ebook/',function (req,res){
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=ebook`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(book =>{
                finalist.push({
                    book:book.trackName,
                    poster:book.artworkUrl100,
                    description:book.shortDescription
                })
            })
            let ebook = {"ebook":finalist}
            res.send(JSON.stringify(ebook))
        }),
        (error)=>{
            res.send(error)
        }
});
//This will get podcast details
app.get('/podcast/',function (req,res){
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=podcast`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(podcast =>{
                finalist.push({
                    name:podcast.trackName,
                    poster:podcast.artworkUrl100,
                    description:podcast.shortDescription,
                    genre:podcast.primaryGenreName
                })
            })
            let podcast = {"podcast":finalist}
            res.send(JSON.stringify(podcast))
        }),
        (error)=>{
            res.send(error)
        }
});
//This will get details about music
app.get('/music/',function (req,res){
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=music`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(music =>{
                finalist.push({
                    name:music.trackName,
                    poster:music.artworkUrl100,
                    album:music.collectionName,
                    description:music.shortDescription,
                    genre:music.primaryGenreName
                })
            })
            let music = {"music":finalist}
            res.send(JSON.stringify(music))
        }),
        (error)=>{
            res.send(error)
        }
});
//This will get details music about all criteria
app.get('/all/',function (req,res){
    let all = {"music":[],"podcast":[],'ebook':[],"audiobook":[],"shows":[],"movies":[] }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=music`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(music =>{
                finalist.push({
                    name:music.trackName,
                    poster:music.artworkUrl100,
                    album:music.collectionName,
                    description:music.shortDescription,
                    genre:music.primaryGenreName
                })
            })
            all.music=finalist

        }),
        (error)=>{
            res.send(error)
        }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=podcast`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(podcast =>{
                finalist.push({
                    name:podcast.trackName,
                    poster:podcast.artworkUrl100,
                    description:podcast.shortDescription,
                    genre:podcast.primaryGenreName
                })
            })
            all.podcast =finalist
        }),
        (error)=>{
            res.send(error)
        }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=ebook`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(book =>{
                finalist.push({
                    book:book.trackName,
                    poster:book.artworkUrl100,
                    description:book.shortDescription
                })
            })
            all.ebook=finalist

        }),
        (error)=>{
            res.send(error)
        }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=us&media=audiobook`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(audiobook =>{
                finalist.push({
                    book:audiobook.collectionName,
                    poster:audiobook.artworkUrl100,
                    description:audiobook.shortDescription
                })
            })
            all.audiobook=finalist
        }),
        (error)=>{
            res.send(error)
        }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&media=tvShow`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(episodes =>{
                finalist.push({
                    show:episodes.artistName,
                    episode:episodes.trackNumber,
                    trailer:episodes.previewUrl,
                    poster:episodes.artworkUrl100,
                    description:episodes.shortDescription
                })
            })
            all.shows=finalist
        }),
        (error)=>{
            res.send(error)
        }
    fetch(`https://itunes.apple.com/search?term=${req.query.name}&country=ZA&media=movie`)
        .then(res => res.json())
        .then((result)=>{
            let data = result.results;
            let finalist =[];
            data.map(movie =>{
                finalist.push({
                    name:movie.trackName,
                    trailer:movie.previewUrl,
                    poster:movie.artworkUrl100,
                    genre:movie.primaryGenreName,
                    age:movie.contentAdvisoryRating,
                    description:movie.shortDescription
                })
            })
            all.movies = finalist
            res.send(JSON.stringify(all))
        }),
        (error)=>{
            res.send(error)
        }

});

// This will start the serer
app.listen(PORT,function (){
    console.log("I am awake master")
})

if (process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, 'frontend/build')));
    app.get('*',(req,res)=> {res.sendFile(path.resolve(__dirname,
        'frontend', 'build','index.html'));
    });
}
