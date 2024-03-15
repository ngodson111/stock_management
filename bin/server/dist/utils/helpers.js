"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatResponseData = exports.generateRandomHex = void 0;
var crypto_1 = __importDefault(require("crypto"));
var generateRandomHex = function (num) {
    if (num === void 0) { num = 8; }
    return crypto_1.default.randomBytes(num).toString("hex");
};
exports.generateRandomHex = generateRandomHex;
function formatResponseData(result, data, message, schemas) {
    return {
        success: result,
        data: data,
        schemas: schemas,
        message: message !== null && message !== void 0 ? message : "Request fulfilled successfully",
    };
}
exports.formatResponseData = formatResponseData;
//# sourceMappingURL=helpers.js.map