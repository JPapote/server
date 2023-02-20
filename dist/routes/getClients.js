"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getClient_1 = require("../controllers/getClient");
const router = (0, express_1.Router)();
router.get('/', getClient_1.getClient);
exports.default = router;
