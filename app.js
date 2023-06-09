const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();

const app = express();
app.set('view engine', 'ejs');

// app.use(express.static('public'));
app.use(express.static(__dirname + "/public/"));
app.use(bodyParser.urlencoded({extended: true}));


// 
// router.get('/', (req, res) => {
//     console.log('Request for home recieved');
//     res.render('pages/index');
// });
  
// router.get('/about', (req, res) => {
//     console.log('Request for about page recieved');
//     res.render('about');
// });
  
// router.get('/contact', (req, res) => {
//     console.log('Request for contact page recieved');
//     res.render('contact');
// });
// router.get('/work', (req, res) => {
//     console.log('Request for contact page recieved');
//     res.render('work');
// });
  
// module.exports = router;



//

app.get('/', function(req, res){
    // res.sendFile(__dirname + "/index.html");
    res.render('pages/index');
});
app.get('/work', function(req, res){
    // res.sendFile(__dirname + "/work.html");
    res.render('pages/work');
});
app.get('/project', function(req, res){
    // res.sendFile("project");
    res.render('pages/project');
});
app.get('/about', function(req, res){
    res.render('pages/about');
});
app.get('/contact', function(req, res){
    res.render('pages/contact');
});



app.listen(4000, function(){
    console.log("Server is running on port 4000....");
});

