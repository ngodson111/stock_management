"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var zod_1 = __importDefault(require("../lib/zod"));
var validateToken_1 = __importDefault(require("./middlewares/validateToken"));
var global_schema_1 = require("../schemas/global.schema");
var stocks_schema_1 = require("../schemas/stocks.schema");
var stock_controller_1 = __importDefault(require("./controllers/stock.controller"));
var vendors_schema_1 = require("../schemas/vendors.schema");
function stockRoutes(router) {
    router.post("/stocks", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: stocks_schema_1.StockInsert.strict(), type: "Body" }), stock_controller_1.default.create);
    router.post("/stocks/purchase-bill", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({
        schema: stocks_schema_1.PurchaseBillInsert.strict(),
        type: "Body",
    }), stock_controller_1.default.purchaseBillCreate);
    router.get("/stocks", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: global_schema_1.SearchQuery.strict(), type: "Query" }), stock_controller_1.default.find);
    router.get("/stocks/vendors/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: vendors_schema_1.VendorId.strict(), type: "Params" }), stock_controller_1.default.findByVendor);
    router.get("/stocks/products/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: stocks_schema_1.StockId.strict(), type: "Params" }), stock_controller_1.default.findByProductId);
    router.get("/stocks/bills/:id", (0, validateToken_1.default)({ checkAdmin: true }), zod_1.default.requestAsyncParser({ schema: stocks_schema_1.StockId.strict(), type: "Params" }), stock_controller_1.default.findByBillNumber);
}
exports.default = stockRoutes;
//# sourceMappingURL=stock.routes.js.map