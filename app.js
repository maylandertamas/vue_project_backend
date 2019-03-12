const express = require('express')
const app = express()
var cors = require('cors')
var fs = require('fs')
var axios = require('axios');
var bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/*  const countBreeds = async () => {
    return breeds = axios({
        method: 'get',
        url: 'https://dog.ceo/api/breeds/list/all',
        proxy: {
             host: 'bud-proxy.avl.com',
             port: 8080
         }
      })
      .then(response => {
            var json = JSON.stringify(response.data);
            fs.writeFileSync('videos.json', json, 'utf8')
      })
      .catch(error => {
        console.log(error)
      })
  }*/


  

app.get('/videos', function (req, res) {
 
   /* countBreeds().then(resp => {
       
        var readFile = JSON.parse(fs.readFileSync('videos.json', 'utf8'))
        res.send(readFile)});
    axios.get('https://www.googleapis.com/youtube/v3/search?part=id&channelId=UCIiJ33El2EakaXBzvelc2bQ&type=video&key=AIzaSyBfynihkI2OuWswP76U1fhCGdlX3EzSELE')
        .then(response => {
            var videoLinks = {
                links: []
            };
            response.data.items.forEach(element => {
            videoLinks.links.push('https://www.youtube.com/embed/'+element.id.videoId);
            })
            var json = JSON.stringify(videoLinks);
            fs.writeFileSync('videos.json', json, 'utf8')
            var readFile = JSON.parse(fs.readFileSync('videos.json', 'utf8'))
            res.send(readFile)
        })
        .catch((error) => {
            res.send(error);
        });*/
        try {
            fs.readFileSync('videos.json', 'utf8')
        } catch(err) {
            var fileData = {
                links: []
            }
            var json = JSON.stringify(fileData);
            fs.writeFileSync('videos.json', json, 'utf8')
        }
        var videos = JSON.parse(fs.readFileSync('videos.json', 'utf8'));
        res.send(videos)
})

app.post('/videos', function (req, res) {
    var fileData = {
        links: []
    }
    fileData.links = req.body.links
    var json = JSON.stringify(fileData);
    fs.writeFileSync('videos.json', json, 'utf8')
    res.send(fileData.links)
    
    
})

app.listen(3000, function () {
  console.log('Listening on port 3000!')
})