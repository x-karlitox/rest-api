var express = require('express'),
    app = express(),
    ip = process.env.IP,
    port = process.env.PORT || 8080,
    mongoose = require('mongoose'),
    tasks = require('./api/models/todosModel'),
    bodyParser = require('body-parser');
    
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb://localhost/Todosdb');
    
    app.use(bodyParser.urlencoded({ extended:true}));
    app.use(bodyParser.json());
    
    var routes = require('./api/routes/todosRoutes');
    routes(app);
    
    app.listen(port, ip);
    console.log('The TODO REST API server is now running on IP: ' + ip +' and PORT: ' + port);