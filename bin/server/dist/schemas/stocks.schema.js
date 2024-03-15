"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockId = exports.StockInsert = exports.PurchaseBillInsert = exports.Stock = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.Stock = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    billId: (0, common_schema_1.stringField)("Bill ID"),
    vendorId: (0, common_schema_1.stringField)("Vendor ID"),
    productId: (0, common_schema_1.stringField)("Product ID"),
    date: (0, common_schema_1.stringField)("Date").refine(function (value) { return new Date(value) instanceof Date; }, {
        message: "Invalid Stock Date",
    }),
    amount: (0, common_schema_1.positiveNumberString)("Amount"),
    quantity: (0, common_schema_1.positiveNumberString)("Quantity"),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.PurchaseBillInsert = exports.Stock.pick({
    vendorId: true,
    date: true,
}).extend({
    billNumber: (0, common_schema_1.stringField)("Bill Number"),
    products: zod_1.z
        .array(zod_1.z.object({
        productId: (0, common_schema_1.stringField)("Product ID"),
        quantity: (0, common_schema_1.positiveNumberString)("Quantity"),
        rate: (0, common_schema_1.positiveNumberString)("Rate"),
    }))
        .refine(function (value) { return value.length > 0; }, {
        message: "Atlease single product is required",
    }),
});
exports.StockInsert = exports.Stock.omit({
    id: true,
    inserted: true,
    updated: true,
});
exports.StockId = exports.Stock.pick({ id: true });
//# sourceMappingURL=stocks.schema.js.map