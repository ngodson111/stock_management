"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var stock_service_1 = __importDefault(require("../../services/stock.service"));
var helpers_1 = require("../../utils/helpers");
var stockController = {
    create: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, date, productId, quantity, vendorId, amount, billId, response, error_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, date = _a.date, productId = _a.productId, quantity = _a.quantity, vendorId = _a.vendorId, amount = _a.amount, billId = _a.billId;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.create({
                                date: date,
                                productId: productId,
                                quantity: quantity,
                                vendorId: vendorId,
                                amount: amount,
                                billId: billId,
                            })];
                    case 2:
                        response = _b.sent();
                        res.status(201).json((0, helpers_1.formatResponseData)(true, response, "Stock created"));
                        return [3, 4];
                    case 3:
                        error_1 = _b.sent();
                        next(error_1);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    purchaseBillCreate: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, date, products, vendorId, billNumber, response, error_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.body, date = _a.date, products = _a.products, vendorId = _a.vendorId, billNumber = _a.billNumber;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.purchaseBillCreate({
                                date: date,
                                vendorId: vendorId,
                                billNumber: billNumber,
                                products: products,
                            })];
                    case 2:
                        response = _b.sent();
                        res.status(201).json((0, helpers_1.formatResponseData)(true, response, "Bill created"));
                        return [3, 4];
                    case 3:
                        error_2 = _b.sent();
                        next(error_2);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    delete: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.delete({ id: id })];
                    case 2:
                        response = _a.sent();
                        res
                            .status(response ? 200 : 400)
                            .json((0, helpers_1.formatResponseData)(response, undefined, response ? "Stock deleted" : "Unable to delete stock"));
                        return [3, 4];
                    case 3:
                        error_3 = _a.sent();
                        next(error_3);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    find: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var q, response, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        q = req.query.q;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.find({ q: q })];
                    case 2:
                        response = _a.sent();
                        res.status(200).json((0, helpers_1.formatResponseData)(true, response, "Stock fetched"));
                        return [3, 4];
                    case 3:
                        error_4 = _a.sent();
                        next(error_4);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    findByVendor: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.findByVendor({ id: id })];
                    case 2:
                        response = _a.sent();
                        res.status(200).json((0, helpers_1.formatResponseData)(true, response, "Stock fetched"));
                        return [3, 4];
                    case 3:
                        error_5 = _a.sent();
                        next(error_5);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    findByBillNumber: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.findByBillNumber({ id: id })];
                    case 2:
                        response = _a.sent();
                        res.status(200).json((0, helpers_1.formatResponseData)(true, response, "Stock fetched"));
                        return [3, 4];
                    case 3:
                        error_6 = _a.sent();
                        next(error_6);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
    findByProductId: function (req, res, next) {
        return __awaiter(this, void 0, void 0, function () {
            var id, response, error_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        id = req.params.id;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4, stock_service_1.default.findByProductId({ id: id })];
                    case 2:
                        response = _a.sent();
                        res
                            .status(200)
                            .json((0, helpers_1.formatResponseData)(true, response, "Stocks fetched"));
                        return [3, 4];
                    case 3:
                        error_7 = _a.sent();
                        next(error_7);
                        return [3, 4];
                    case 4: return [2];
                }
            });
        });
    },
};
exports.default = stockController;
//# sourceMappingURL=stock.controller.js.map