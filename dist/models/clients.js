"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FixedPhone = exports.Phone = exports.Client = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Client = connection_1.default.define("client", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.Phone = connection_1.default.define("phone", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    namePhone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    number: {
        type: sequelize_1.DataTypes.BIGINT,
    },
    clientId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.FixedPhone = connection_1.default.define("fixedPhone", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    reparation: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    phoneId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
});
exports.Client.hasMany(exports.Phone);
exports.Phone.hasMany(exports.FixedPhone);
exports.FixedPhone.belongsTo(exports.Phone);
