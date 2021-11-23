const express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded ({ extended: false });
const app = express();
app.use(express.static('public'));



app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor funcionando');
});

app.get('/', (req,res)=>{
    console.log("paso2");
    res.sendFile(__dirname + '/views/home.html');
});
app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});
app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});
app.post('/login', urlencodedParser, function(req, res) {
    console.log(req.body);
    res.sendFile(__dirname + '/views/home.html');
})
app.post('/register', urlencodedParser, function(req, res) {
    console.log(req.body);
    console.log("paso1");
    res.redirect('/');
})