var orm=require('../config/orm')


var burger={
    all:function(cb){
        orm.selectAll("burgers",cb,function(res){
            cb(res)
        })
    },

    create:function(name,devoured,cb){
        orm.insertOne(name,devoured,function(res){
            cb(res)
        })
    },

    update:function(id,cb){
        orm.updateOne('burgers',id,cb),function(res){
            cb(res)
        }
    },
    delete:function(id,cb){
        orm.deleteOne('burgers',id,cb,function(res){
            cb(res)
        })
    }

}





module.exports=burger