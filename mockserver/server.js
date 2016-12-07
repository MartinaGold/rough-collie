var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var messages =  [];

app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/messages', function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.send(getAllMessages());
});

app.post('/messages', function (req, res) {
    res.setHeader('Content-Type', 'application/json');

    var body = req.body;
    if( ! body.text || ! body.name || ! body.date){
        res.status(400).send({error: 'SOMETHING_IS_MISSING'});
        return;
    }

    messages.unshift({
        name: body.name,
        date: body.date,
        text: body.text
    })

    res.send();
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});


function getAllMessages(){
    return messages;
}
