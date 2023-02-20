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
Object.defineProperty(exports, "__esModule", { value: true });
exports.reparation = exports.getClient = void 0;
const clients_1 = require("../models/clients");
const getClient = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allClients = yield clients_1.Client.findAll({
        include: [{ model: clients_1.Phone }]
    });
    res.json(allClients);
});
exports.getClient = getClient;
const reparation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allRepations = yield clients_1.FixedPhone.findAll({
        include: [{ model: clients_1.Phone }]
    });
    res.json(allRepations);
});
exports.reparation = reparation;
