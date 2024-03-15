"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var products_schema_1 = require("../schemas/products.schema");
var global_schema_1 = require("../schemas/global.schema");
var product_controller_1 = __importDefault(require("./controllers/product.controller"));
function productRoutes(router) {
    router.post("/products", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: products_schema_1.ProductInsert.strict(), type: "Body" }), product_controller_1.default.create);
    router.put("/products/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: products_schema_1.ProductInsert.strict(), type: "Body" }, { schema: products_schema_1.ProductId.strict(), type: "Params" }), product_controller_1.default.update);
    router.delete("/products/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: products_schema_1.ProductId.strict(), type: "Params" }), product_controller_1.default.delete);
    router.get("/products", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: global_schema_1.SearchQuery.strict(), type: "Query" }), product_controller_1.default.find);
    router.get("/products/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: products_schema_1.ProductId.strict(), type: "Params" }), product_controller_1.default.findById);
}
exports.default = productRoutes;
//# sourceMappingURL=product.routes.js.map