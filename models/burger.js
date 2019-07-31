



module.exports=function(sequelize,DataTypes){
    var Burger = sequelize.define("Burger",{
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
          },
        burgerName:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                notNull: true,
            }
            
        },
        devoured:{
            type:DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
          },
          updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at'
          }
    });

    Burger.associate=function(models){
        Burger.belongsTo(models.Customer,{
            foreignKey:{
                allowNull:true
            }
            
        });
    }
    return Burger
};