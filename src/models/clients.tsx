import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { User } from "./user";


export const Client = sequelize.define("client", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    

})

export const Phone = sequelize.define("phone", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
    },
    
    namePhone: {
        type: DataTypes.STRING,
        allowNull: false
    },

    number: {
        type: DataTypes.BIGINT,
    },

    clientId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
    
}) 

 export const FixedPhone = sequelize.define("fixedPhone", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
      
    },

    reparation: {
        type: DataTypes.STRING,
        allowNull: false
    },

    phoneId:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
    
}) 

Client.hasMany(Phone);
Phone.hasMany(FixedPhone);
FixedPhone.belongsTo(Phone)

