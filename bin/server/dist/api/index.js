"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var vendor_routes_1 = __importDefault(require("./vendor.routes"));
var member_routes_1 = __importDefault(require("./member.routes"));
var product_routes_1 = __importDefault(require("./product.routes"));
var stock_routes_1 = __importDefault(require("./stock.routes"));
var sales_routes_1 = __importDefault(require("./sales.routes"));
var user_routes_1 = __importDefault(require("./user.routes"));
var bill_routes_1 = __importDefault(require("./bill.routes"));
function routes(app) {
    var router = (0, express_1.Router)();
    (0, vendor_routes_1.default)(router);
    (0, member_routes_1.default)(router);
    (0, product_routes_1.default)(router);
    (0, stock_routes_1.default)(router);
    (0, sales_routes_1.default)(router);
    (0, user_routes_1.default)(router);
    (0, bill_routes_1.default)(router);
    app.use("/v1", router);
}
exports.default = routes;
//# sourceMappingURL=index.js.map