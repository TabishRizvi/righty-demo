var express = require('express');
var app = express();
var morgan = require("morgan");

app.use(morgan("tiny"));

var router = require("./routes");

var Righty = require("righty")({
    defaultContentType : "json",
    swagger : {
        title : "Demo app",
        version : "v1",
        description : "Swagger docs for demo app. Generated using `righty`"
    }
});



app.use(express.static(__dirname+ '/public'));
Righty.use(app,router);

app.listen(3000,function() {
    console.log("Server started");
    console.log("Swagger -  /public/swagger");
});
