"use strict";

const os = require('os');

const express = require('express');

let app = express();

app.get('/', function (req, res) {
    let json = {
        version: "1234",
        hostname: `${os.hostname()}`
    };

    res.json(json);
});

app.get('/test', function (req, res) {
    let json = {
        version: "1234",
        hostname: `${os.hostname()}`
    };

    console.log(json);

    res.json(json);
});


app.listen(8080);