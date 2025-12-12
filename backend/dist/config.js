"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IS_PROD = exports.MONGODB_URL = exports.JWT_SECRET = void 0;
exports.JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";
exports.MONGODB_URL = process.env.MONGODB_URL || "mongodb://localhost:27017/paytm";
exports.IS_PROD = process.env.NODE_ENV === "production";
