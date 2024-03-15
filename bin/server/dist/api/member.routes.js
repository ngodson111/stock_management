"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var members_schema_1 = require("../schemas/members.schema");
var member_controller_1 = __importDefault(require("./controllers/member.controller"));
var global_schema_1 = require("../schemas/global.schema");
function memberRoutes(router) {
    router.post("/members", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: members_schema_1.MemberInsert.strict(), type: "Body" }), member_controller_1.default.create);
    router.put("/members/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: members_schema_1.MemberInsert.strict(), type: "Body" }, { schema: members_schema_1.MemberId.strict(), type: "Params" }), member_controller_1.default.update);
    router.delete("/members/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: members_schema_1.MemberId.strict(), type: "Params" }), member_controller_1.default.delete);
    router.get("/members", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: global_schema_1.SearchQuery.strict(), type: "Query" }), member_controller_1.default.find);
    router.get("/members/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: members_schema_1.MemberId.strict(), type: "Params" }), member_controller_1.default.findById);
}
exports.default = memberRoutes;
//# sourceMappingURL=member.routes.js.map