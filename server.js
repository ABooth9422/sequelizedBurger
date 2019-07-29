var express=require('express')
var path=require('path')
var exphbs = require("express-handlebars");

var app=express()
var db= require('./models')

app.use(express.urlencoded({ extended: true}))
app.use(express.json());
app.use('/public', express.static(path.join(__dirname + '/public')));


app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


require("./controllers/burgers_controller")(app);



app.get("/",function(req,resp){
    resp.render('index')
})

db.sequelize.sync({force:true}).then(function(){
    app.listen(process.env.PORT || 3000, function(){
        console.log("server live in node")
    })

})

