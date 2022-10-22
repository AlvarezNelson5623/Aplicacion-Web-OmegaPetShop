var express= require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(express.json());
app.use(express.urlencoded({extended : true}));

//Routers

app.use(require('./routers/routers.js'));
app.use((req,res,next)=>{
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Header','Authorization, X-API-KEY, Origin, XRequested,-With, Content-Type, Accept, Accept-Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods','GET, POST, DELETE, OPTIONS');
    res.header('Allow', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});



app.use(require('./routers/routers.js'));
module.exports=app;