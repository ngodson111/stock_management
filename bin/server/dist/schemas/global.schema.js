"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserLogin = exports.SearchQuery = void 0;
var zod_1 = require("zod");
var common_schema_1 = require("./common.schema");
exports.SearchQuery = zod_1.z.object({
    q: common_schema_1.optionalStringField,
    startDate: (0, common_schema_1.ISODateString)("Start Date").optional(),
    endDate: (0, common_schema_1.ISODateString)("End Date").optional(),
});
exports.UserLogin = zod_1.z.object({
    username: (0, common_schema_1.stringField)("Username"),
    password: (0, common_schema_1.passwordSchema)("Password"),
});
//# sourceMappingURL=global.schema.js.map