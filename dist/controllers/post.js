"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneClient = exports.fixedPhone = exports.newPhone = exports.newClient = exports.registerUser = exports.login = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const clients_1 = require("../models/clients");
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    const findedUser = yield user_1.User.findOne({ where: { name: name } });
    if (!findedUser) {
        return res.status(400).json({
            msg: 'The user: ' + name + ' is not registered'
        });
    }
    const passwordValid = yield bcrypt_1.default.compare(password, findedUser.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: 'Password Incorrect'
        });
    }
    const token = jsonwebtoken_1.default.sign({
        username: name,
    }, process.env.SECRET_KEY || 'mariobros123');
    res.json({ token });
});
exports.login = login;
const registerUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, password } = req.body;
    const hashPassword = yield bcrypt_1.default.hash(password, 10);
    user_1.User.create({
        name: name,
        password: hashPassword
    });
    res.json({
        msg: "User: " + name + " created successfully",
    });
});
exports.registerUser = registerUser;
const newClient = (req, res) => {
    const { name } = req.body;
    clients_1.Client.create({
        name
    });
    res.json({
        msg: "Client: " + name + " created successfully",
    });
};
exports.newClient = newClient;
const newPhone = (req, res) => {
    const { namePhone, number, clientId } = req.body;
    clients_1.Phone.create({
        namePhone,
        number,
        clientId
    });
    res.json({
        msg: "Phone: " + namePhone + " add",
    });
};
exports.newPhone = newPhone;
const fixedPhone = (req, res) => {
    const { reparation, phoneId } = req.body;
    clients_1.FixedPhone.create({
        reparation,
        phoneId
    });
    res.json({
        msg: reparation,
    });
};
exports.fixedPhone = fixedPhone;
const phoneClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.body;
    const allPhoneClient = yield clients_1.Phone.findAll({
        where: {
            clientId: id
        },
        include: [{ model: clients_1.FixedPhone }]
    });
    return res.json(allPhoneClient);
});
exports.phoneClient = phoneClient;
