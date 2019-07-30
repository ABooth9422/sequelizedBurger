var express=require('express')


var db=require('../models')


module.exports=function(app){
app.get('/',function(req,resp){
    db.Burger.findAll({},{raw:true}).then(function(data){
        
        var burgerData=JSON.parse(JSON.stringify(data))
        var handlebarObj={
          burger:burgerData
        };
       
        resp.render('index',handlebarObj)
    })

})

app.post('/addBurger',function(req,resp){
     var name = req.body.burgerName
    var isDevoured=req.body.devoured
    // var custName=req.body.customer
    // console.log(custName)
    // db.Customer.create({
    //     customerName:custName
    // }).then(function(data){

   
    db.Burger.create({
        burgerName:name,
        devoured:isDevoured
    }
    ).then(function(data){
       
        resp.status(201).end()
    })

    resp.redirect('/')

})

app.delete('/delete',function(req,resp){
    
    db.Burger.destroy({where:{id:req.body.id}}).then(function(data){
        resp.status(200).end()
    })

})

app.put('/update',function(req,resp){
    console.log(req.body)
    db.Burger.update(req.body.update,{where:{id:req.body.update.id}}).then(function(data){
        resp.status(200).end()
        resp.redirect('/') 
    })
    db.Customer.create(req.body.customerName).then(function(data){
        resp.status(201).end()
    })
  
})
}



