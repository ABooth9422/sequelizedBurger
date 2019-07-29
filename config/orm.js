var connection=require('../config/connection')



var orm={
    selectAll:function(table,cb){
        var query=`SELECT * FROM `+ table +';';
        connection.query(query,function(err,resp){
            if (err) throw err
            cb(resp)
        })

    },
    insertOne:function(name,devoured,cb){
        var query= `INSERT INTO burgers (burger,devoured) VALUES (?,?)`
        connection.query(query,[name,devoured],function(err,resp){
           
            if (err) throw err
            cb(resp)
        })


    },
    updateOne:function(table,id,cb){
        var query=`UPDATE ?? SET devoured =1 WHERE ID = ? `
       
        connection.query(query,[table,id],function(err,resp){
            if(err) throw err

            cb(resp)
        })
    

    },
    deleteOne:function(table,id,cb){
        
        var query=`DELETE FROM ?? WHERE ID = ? `
       
        connection.query(query,[table,id],function(err,resp){
            if(err) throw err

            cb(resp)
        })

    }
}




module.exports=orm