"use strict";

const os = require('os');

const express = require('express');

let app = express();

app.get('/', function (req, res) {
    let json = {
        version: "1234",
        hostname: `${os.hostname()}`
    };

    let n = 0;
    while(n<100000){
        n++;
        if (n % 1000) {
            console.log(n);
        }
    }

    res.json(json);
});

app.listen(3000);