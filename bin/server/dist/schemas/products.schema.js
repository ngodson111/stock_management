"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductId = exports.ProductInsert = exports.ProductSchema = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.ProductSchema = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    code: (0, common_schema_1.stringField)("Code"),
    title: (0, common_schema_1.stringField)("Title"),
    buyingPrice: (0, common_schema_1.positiveNumberString)("Buying Price"),
    sellingPrice: (0, common_schema_1.positiveNumberString)("Selling Price"),
    description: (0, common_schema_1.stringField)("Description").optional().nullable(),
    tags: (0, common_schema_1.stringField)("Tags").optional().nullable(),
    quantity: (0, common_schema_1.positiveNumberString)("Quantity"),
    rack: (0, common_schema_1.stringField)("Rack").optional().nullable(),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.ProductInsert = exports.ProductSchema.omit({
    id: true,
    inserted: true,
    updated: true,
    quantity: true,
});
exports.ProductId = exports.ProductSchema.pick({ id: true });
//# sourceMappingURL=products.schema.js.map