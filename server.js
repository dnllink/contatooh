var http = require('http');
var app = require('./config/express')(app);

var config = require('./config/config')();

require('./config/passport')();
require('./config/database.js')(config.db);

http.createServer(app).listen(config.port, config.address, function () {
    console.log('Express Server ' + config.address + '(' + config.env + ') - Port: ' + config.port);
});