"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newClient = exports.login = void 0;
const login = (req, res) => {
    
    res.json({
        msg: "login",
        body: req.body
    });
};
exports.login = login;
const newClient = (req, res) => {
  
    res.json({
        msg: "newClient",
        body: req.body
    });
};
exports.newClient = newClient;
