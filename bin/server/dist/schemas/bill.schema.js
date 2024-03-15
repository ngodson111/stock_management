"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillId = exports.BillInsert = exports.Bill = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.Bill = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    billNumber: (0, common_schema_1.stringField)("Bill Number"),
    vendorId: (0, common_schema_1.stringField)("Vendor ID"),
    date: (0, common_schema_1.stringField)("Date").refine(function (value) { return new Date(value) instanceof Date; }, {
        message: "Invalid Bill Date",
    }),
    amount: (0, common_schema_1.positiveNumberString)("Amount"),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.BillInsert = exports.Bill.omit({
    id: true,
    inserted: true,
    updated: true,
});
exports.BillId = exports.Bill.pick({ id: true });
//# sourceMappingURL=bill.schema.js.map