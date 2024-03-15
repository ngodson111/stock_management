"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumField = exports.optionalURLField = exports.optionalEmailField = exports.optionalBooleanField = exports.optionalPositiveIntegerString = exports.optionalNumberField = exports.optionalStringField = exports.booleanField = exports.stringField = exports.urlField = exports.emailField = exports.percentageField = exports.ISODateString = exports.positiveNumberString = exports.positiveNumberField = exports.passwordSchema = void 0;
var zod_1 = require("zod");
var passwordSchema = function (name, min, max) {
    if (min === void 0) { min = 8; }
    if (max === void 0) { max = 32; }
    return zod_1.z
        .string({
        required_error: "".concat(name, " is required"),
        invalid_type_error: "".concat(name, " type is invalid"),
    })
        .min(min, { message: "".concat(name, " is too short") })
        .max(max, { message: "".concat(name, " is too long") })
        .refine(function (password) {
        if (!/[a-z]/.test(password))
            return false;
        if (!/[A-Z]/.test(password))
            return false;
        if (!/\d/.test(password))
            return false;
        if (!/[!@#$%^&*()-_=+{};:'",<.>\/?[\]\\]/.test(password))
            return false;
        return true;
    }, { message: "Invalid password format" });
};
exports.passwordSchema = passwordSchema;
var positiveNumberField = function (val, min) {
    if (min === void 0) { min = 0; }
    return zod_1.z
        .number({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    })
        .min(min, { message: "Must be a positive number" });
};
exports.positiveNumberField = positiveNumberField;
var positiveNumberString = function (name) {
    return zod_1.z.string().refine(function (value) { return !isNaN(parseFloat(value)); }, {
        message: "".concat(name, " must be a positive number."),
    });
};
exports.positiveNumberString = positiveNumberString;
var ISODateString = function (name) {
    return zod_1.z.string().refine(function (value) { return /^\d{4}-\d{2}-\d{2}$/.test(value); }, {
        message: "".concat(name, " must be a valid ISO date string (YYYY-MM-DD)."),
    });
};
exports.ISODateString = ISODateString;
var percentageField = function (val) {
    return zod_1.z
        .number({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    })
        .min(0, { message: "Must be a greater than or equals to 0" })
        .max(100, { message: "Must be a less than or equals to 100" });
};
exports.percentageField = percentageField;
var emailField = function (val) {
    return zod_1.z
        .string({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    })
        .min(1, { message: "".concat(val, " is too short") })
        .email("Invalid email address");
};
exports.emailField = emailField;
var urlField = function (val) {
    return zod_1.z
        .string({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    })
        .url("Provide valid url");
};
exports.urlField = urlField;
var stringField = function (val, min, max) {
    if (min === void 0) { min = 1; }
    return zod_1.z
        .string({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    })
        .min(min, { message: "".concat(val, " is too short") })
        .refine(function (data) { return (max ? data.length <= max : true); }, "".concat(val, " is too long"));
};
exports.stringField = stringField;
var booleanField = function (val) {
    return zod_1.z.boolean({
        required_error: "".concat(val, " is required"),
        invalid_type_error: "Provide valid type",
    });
};
exports.booleanField = booleanField;
exports.optionalStringField = zod_1.z
    .string({ invalid_type_error: "Provide valid type" })
    .optional();
exports.optionalNumberField = zod_1.z
    .number({ invalid_type_error: "Provide valid type" })
    .optional();
exports.optionalPositiveIntegerString = zod_1.z
    .string()
    .refine(function (value) { return (!value ? true : !isNaN(+value)); }, {
    message: "Field must be a positive integer.",
})
    .optional();
exports.optionalBooleanField = zod_1.z
    .boolean({ invalid_type_error: "Provide valid type" })
    .optional();
exports.optionalEmailField = zod_1.z
    .string({ invalid_type_error: "Provide valid type" })
    .email({ message: "Provide valid email" })
    .optional();
exports.optionalURLField = zod_1.z
    .string({
    invalid_type_error: "Provide valid type",
})
    .url("Provide valid url")
    .optional();
var enumField = function (val, name) {
    return zod_1.z.enum(val, {
        required_error: "".concat(name, " is required"),
        invalid_type_error: "Provide valid type",
    });
};
exports.enumField = enumField;
//# sourceMappingURL=common.schema.js.map