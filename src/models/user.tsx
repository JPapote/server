import { DataTypes } from "sequelize";
import sequelize from "../db/connection";

export const User = sequelize.define("user", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true
    },
    
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    password:{
        type: DataTypes.STRING,
        allowNull: false
    }
    
})
