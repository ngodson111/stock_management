"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JWT = (function () {
    function JWT() {
    }
    JWT.sign = function (_a) {
        var data = _a.data, exp = _a.exp, secretKey = _a.secretKey;
        try {
            var expire = exp ? { expiresIn: exp } : undefined;
            var Token = jsonwebtoken_1.default.sign(data, secretKey, expire);
            return Token;
        }
        catch (error) {
            throw error;
        }
    };
    JWT.verify = function (token, secretKey) {
        try {
            var payload = jsonwebtoken_1.default.verify(token, secretKey);
            return payload;
        }
        catch (error) {
            throw error;
        }
    };
    return JWT;
}());
exports.default = JWT;
//# sourceMappingURL=jwt.js.map