var express=require('express')


var db=require('../models')


module.exports=function(app){
app.get('/',function(req,resp){
    db.Burger.findAll({},{raw:true}).then(function(data){
        

        var burgerData=JSON.parse(JSON.stringify(data))
        console.log(burgerData)
      
        var handlebarObj={
          burger:burgerData
        };
       
        resp.render('index',handlebarObj)
    })

})

app.post('/addBurger',function(req,resp){
     var name = req.body.burgerName
    var isDevoured=req.body.devoured
  
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
    // burger.delete(req.body.id,function(result){
    //     resp.status(200).end()
    // })
    db.Burger.destroy({where:{id:req.body.id}}).then(function(data){
        resp.status(200).end()
    })

})

app.put('/update',function(req,resp){
    
    console.log(req.body.devoured)
    console.log(req.body.id)


    db.Burger.update(req.body,{where:{id:req.body.id}}).then(function(data){
            
    })
    resp.redirect('/')  
})
}



