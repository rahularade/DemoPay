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
const express_1 = __importDefault(require("express"));
const db_1 = require("../db");
const middleware_1 = __importDefault(require("../middleware"));
const mongoose_1 = require("mongoose");
const accountRouter = express_1.default.Router();
accountRouter.get("/balance", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const account = yield db_1.Account.findOne({ userId: req.userId });
        if (!account) {
            return res.status(404).json({
                message: "Balance not found",
            });
        }
        res.status(200).json({
            balance: account.balance,
        });
    }
    catch (error) {
        res.status(500).json({
            messsage: "Failed to fetch balance. Try again later.",
        });
    }
}));
accountRouter.post("/transfer", middleware_1.default, (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const session = yield (0, mongoose_1.startSession)();
    try {
        session.startTransaction();
        const { amount, to } = req.body;
        const toAccount = yield db_1.Account.findOne({ userId: to }).session(session);
        if (!toAccount) {
            yield session.abortTransaction();
            return res.status(400).json({
                message: "Invalid account",
            });
        }
        const account = yield db_1.Account.findOne({ userId: req.userId }).session(session);
        if (!account || account.balance < amount) {
            yield session.abortTransaction();
            return res.status(400).json({
                message: "Insufficient balance",
            });
        }
        yield db_1.Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount } }).session(session);
        yield db_1.Account.updateOne({ userId: to }, { $inc: { balance: amount } }).session(session);
        yield session.commitTransaction();
        res.status(200).json({
            message: "Transfer successful",
        });
    }
    catch (error) {
        session.abortTransaction();
        res.status(500).json({
            message: "Failed to transfer. Try again later.",
        });
    }
}));
exports.default = accountRouter;
