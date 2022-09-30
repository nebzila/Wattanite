"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vote = void 0;
const mongoose_1 = require("mongoose");
const index_1 = __importDefault(require("./index"));
//Step 2: Create schema corresponding to interface
const voteSchema = new index_1.default.Schema({
    name: { type: String, required: true },
    postcode: { type: String, required: true },
    movie: { type: Object, required: true },
    restaurant: { type: Object, required: true }
}, { versionKey: false });
//Step 3: create model based on interface
exports.Vote = (0, mongoose_1.model)('Vote', voteSchema);
