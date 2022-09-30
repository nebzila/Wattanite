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
exports.getVote = exports.createVote = void 0;
const schema_1 = require("../models/schema");
const createVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('createVote running');
        const vote = new schema_1.Vote(req.body);
        const savedVote = yield vote.save();
        console.log('savedVote ', savedVote);
        res.send(req.body);
        res.status(201);
    }
    catch (err) {
        console.log('ERROR @createVote ', err);
        res.status(400);
    }
});
exports.createVote = createVote;
const getVote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('getVote running');
        const name = req.params.name;
        const voteFound = yield schema_1.Vote.findOne({ name });
        if (voteFound)
            res.status(200).send(voteFound);
        else
            res.status(404).json({ message: 'Not found' });
    }
    catch (err) {
        console.log('ERROR @getVote ', err);
        res.status(500);
    }
});
exports.getVote = getVote;
