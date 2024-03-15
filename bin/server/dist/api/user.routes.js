"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var global_schema_1 = require("../schemas/global.schema");
var user_controller_1 = __importDefault(require("./controllers/user.controller"));
function userRoutes(router) {
    router.post("/users/login", zod_1.default.requestAsyncParser({ schema: global_schema_1.UserLogin.strict(), type: "Body" }), user_controller_1.default.login);
}
exports.default = userRoutes;
//# sourceMappingURL=user.routes.js.map