"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const post_1 = require("../controllers/post");
const validate_token_1 = __importDefault(require("./validate-token"));
const router = (0, express_1.Router)();
router.post('/login', post_1.login);
router.post('/register', post_1.registerUser);
router.post('/client', validate_token_1.default, post_1.newClient);
router.post('/phone', validate_token_1.default, post_1.newPhone);
router.post('/reparation', validate_token_1.default, post_1.fixedPhone);
router.post('/phoneClient', validate_token_1.default, post_1.phoneClient);
exports.default = router;
