"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var global_schema_1 = require("../schemas/global.schema");
var sales_schema_1 = require("../schemas/sales.schema");
var members_schema_1 = require("../schemas/members.schema");
var sales_controller_1 = __importDefault(require("./controllers/sales.controller"));
function salesRoutes(router) {
    router.post("/sales", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: sales_schema_1.SalesInsert, type: "Body" }), sales_controller_1.default.create);
    router.get("/sales", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: global_schema_1.SearchQuery.strict(), type: "Query" }), sales_controller_1.default.find);
    router.get("/sales/type", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: sales_schema_1.SalesType.strict(), type: "Query" }), sales_controller_1.default.findByType);
    router.get("/sales/members/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: members_schema_1.MemberId.strict(), type: "Params" }), sales_controller_1.default.findByMemberId);
    router.get("/sales/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: sales_schema_1.SalesId.strict(), type: "Params" }), sales_controller_1.default.findById);
}
exports.default = salesRoutes;
//# sourceMappingURL=sales.routes.js.map