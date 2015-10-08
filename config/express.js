var express = require('express');

module.exports = express.exports = function () {
    var app = express();
    app.set('port', 3000);
    return app;
};