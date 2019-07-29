var express=require('express')

var router=express.Router()

var burger=require('../models/burger')


module.exports=function(app){
router.get('/',function(req,resp){
    burger.all(function(data){
        var handlebarObj={
            burger:data
        };
        resp.render('index',handlebarObj)
    })
})

router.post('/addBurger',function(req,resp){
    var name = req.body.title
    var devoured=req.body.devoured
   
    burger.create(
        name,devoured,
        function(data){
    })
    resp.redirect('/')

})

router.delete('/delete',function(req,resp){
    burger.delete(req.body.id,function(result){
        resp.status(200).end()
    })
})

router.put('/update',function(req,resp){
    
    burger.update(req.body.id,function(result){
       resp.status(200).end()
    })

})
}



