"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberId = exports.MemberInsert = exports.Member = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.Member = zod_1.z.object({
    id: (0, common_schema_1.stringField)("ID"),
    phone: (0, common_schema_1.stringField)("Phone", 10, 10),
    fullName: (0, common_schema_1.stringField)("FullName"),
    address: (0, common_schema_1.stringField)("Address"),
    inserted: (0, common_schema_1.stringField)("Inserted"),
    updated: (0, common_schema_1.stringField)("Updated"),
});
exports.MemberInsert = exports.Member.omit({
    id: true,
    inserted: true,
    updated: true,
});
exports.MemberId = exports.Member.pick({ id: true });
//# sourceMappingURL=members.schema.js.map