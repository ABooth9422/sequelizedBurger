module.exports=function(sequelize,DataTypes){
    var Customer= sequelize.define("Customer",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
          customerName:{
              type:DataTypes.STRING,
              allowNull:false,
              validate:{
                  notNull:true
              }
          }
    })
    return Customer
}