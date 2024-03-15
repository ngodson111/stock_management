"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var bcrypt_1 = __importDefault(require("bcrypt"));
var Bcrypt = (function () {
    function Bcrypt() {
    }
    Bcrypt.hash = function (data, saltOrRounds) {
        return bcrypt_1.default.hash(data, saltOrRounds);
    };
    Bcrypt.hashSync = function (data, saltOrRounds) {
        return bcrypt_1.default.hashSync(data, saltOrRounds);
    };
    Bcrypt.compare = function (data, encrypted) {
        return bcrypt_1.default.compare(data, encrypted);
    };
    Bcrypt.compareSync = function (data, encrypted) {
        return bcrypt_1.default.compareSync(data, encrypted);
    };
    return Bcrypt;
}());
exports.default = Bcrypt;
//# sourceMappingURL=bcrypt.js.map