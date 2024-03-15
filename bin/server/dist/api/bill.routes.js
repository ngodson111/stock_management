"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var global_schema_1 = require("../schemas/global.schema");
var bill_schema_1 = require("../schemas/bill.schema");
var vendors_schema_1 = require("../schemas/vendors.schema");
var bill_controller_1 = __importDefault(require("./controllers/bill.controller"));
function billRoutes(router) {
    router.get("/bills", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: global_schema_1.SearchQuery.strict(), type: "Query" }), bill_controller_1.default.find);
    router.get("/bills/vendors/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorId.strict(), type: "Params" }), bill_controller_1.default.findByVendor);
    router.get("/bills/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: bill_schema_1.BillId.strict(), type: "Params" }), bill_controller_1.default.findById);
}
exports.default = billRoutes;
//# sourceMappingURL=bill.routes.js.map