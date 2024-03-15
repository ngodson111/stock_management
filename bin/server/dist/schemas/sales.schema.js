"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesId = exports.SalesInsert = exports.SalesSchema = exports.SalesType = exports.SalesBase = exports.SalesItemId = exports.SalesItemInsert = exports.SalesItem = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.SalesItem = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    salesId: (0, common_schema_1.stringField)("Sales ID"),
    productId: (0, common_schema_1.stringField)("Product ID"),
    title: (0, common_schema_1.stringField)("Title"),
    amount: (0, common_schema_1.positiveNumberString)("Amount"),
    quantity: (0, common_schema_1.positiveNumberString)("Quantity"),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.SalesItemInsert = exports.SalesItem.omit({
    id: true,
    salesId: true,
    inserted: true,
    updated: true,
    amount: true,
});
exports.SalesItemId = exports.SalesItem.pick({ id: true });
exports.SalesBase = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    type: zod_1.z.enum(["Credit", "Cash", "Online"], {
        required_error: "Type is required",
        invalid_type_error: "Provide valid type",
    }),
    amount: (0, common_schema_1.positiveNumberString)("Amount"),
    discount: (0, common_schema_1.positiveNumberString)("Discount"),
    date: (0, common_schema_1.stringField)("Date").refine(function (data) { return new Date(data) instanceof Date; }, {
        message: "Provide valid date",
    }),
    memberId: common_schema_1.optionalStringField,
    remark: common_schema_1.optionalStringField,
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.SalesType = exports.SalesBase.pick({
    type: true,
});
exports.SalesSchema = exports.SalesBase.superRefine(function (data, ctx) {
    if (data.type === "Credit" && !data.memberId)
        return ctx.addIssue({
            path: ["memberId"],
            message: "Member Id is required",
            code: "custom",
        });
});
exports.SalesInsert = exports.SalesBase.omit({
    id: true,
    inserted: true,
    updated: true,
    amount: true,
})
    .extend({
    items: zod_1.z.array(exports.SalesItemInsert.extend({
        sellingPrice: common_schema_1.optionalPositiveIntegerString,
    })),
})
    .superRefine(function (data, ctx) {
    if (data.type === "Credit" && !data.memberId)
        return ctx.addIssue({
            path: ["memberId"],
            message: "Member Id is required",
            code: "custom",
        });
});
exports.SalesId = exports.SalesBase.pick({ id: true });
//# sourceMappingURL=sales.schema.js.map