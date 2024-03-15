"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VendorId = exports.VendorInsert = exports.Vendor = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.Vendor = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    name: (0, common_schema_1.stringField)("Name"),
    address: (0, common_schema_1.stringField)("Address"),
    contact: (0, common_schema_1.stringField)("Contact"),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.VendorInsert = exports.Vendor.omit({
    id: true,
    inserted: true,
    updated: true,
});
exports.VendorId = exports.Vendor.pick({ id: true });
//# sourceMappingURL=vendors.schema.js.map