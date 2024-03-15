"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vendor_controller_1 = __importDefault(require("./controllers/vendor.controller"));
var zod_1 = __importDefault(require("../lib/zod"));
var vendors_schema_1 = require("../schemas/vendors.schema");
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
function vendorRoutes(router) {
    router.post("/vendors", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorInsert.strict(), type: "Body" }), vendor_controller_1.default.create);
    router.put("/vendors/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorInsert.strict(), type: "Body" }, { schema: vendors_schema_1.VendorId.strict(), type: "Params" }), vendor_controller_1.default.update);
    router.delete("/vendors/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorId.strict(), type: "Params" }), vendor_controller_1.default.delete);
    router.get("/vendors", (0, validateToken_1.default)({ checkAdmin: true }), vendor_controller_1.default.find);
    router.get("/vendors/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorId.strict(), type: "Params" }), vendor_controller_1.default.findById);
}
exports.default = vendorRoutes;
//# sourceMappingURL=vendor.routes.js.map