



module.exports=function(sequelize,DataTypes){
    var Burger=sequelize.define("Burger",{
        name:{
            type:DataTypes.String,
            allowNull:false,
            validate:{
                notNull: true,
            }
        },
        devoured:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        }
    })
    return Burger
}