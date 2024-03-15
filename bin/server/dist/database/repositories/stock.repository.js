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
Object.defineProperty(exports, "__esModule", { value: true });
var Stock_1 = require("../models/Stock");
var helpers_1 = require("../../utils/helpers");
var stockRepository = {
    findByBillNumber: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_1;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.find({
                                where: { bill: { id: id } },
                                relations: ["vendor", "product", "bill"],
                                order: { date: "desc" },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_1 = _c.sent();
                        error_1.level = "DB";
                        throw error_1;
                    case 3: return [2];
                }
            });
        });
    },
    findByVendor: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_2;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.find({
                                where: { vendor: { id: id } },
                                relations: ["product", "bill"],
                                order: { date: "desc" },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_2 = _c.sent();
                        error_2.level = "DB";
                        throw error_2;
                    case 3: return [2];
                }
            });
        });
    },
    findByProductId: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_3;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.find({
                                where: { product: { id: id } },
                                relations: ["vendor", "bill", "product"],
                                order: { date: "desc" },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_3 = _c.sent();
                        error_3.level = "DB";
                        throw error_3;
                    case 3: return [2];
                }
            });
        });
    },
    findById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_4;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.findOne({
                                where: { id: id },
                                relations: ["vendor", "bill"],
                                order: { date: "desc" },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_4 = _c.sent();
                        error_4.level = "DB";
                        throw error_4;
                    case 3: return [2];
                }
            });
        });
    },
    find: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var filter, repo, data, error_5;
            var runner = _b.runner, opt = _b.opt;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        filter = (opt === null || opt === void 0 ? void 0 : opt.endDate) && opt.startDate
                            ? {
                                date: {
                                    $gte: new Date(opt.startDate),
                                    $lte: new Date(opt.endDate),
                                },
                            }
                            : undefined;
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.find({
                                where: filter,
                                order: { date: "desc" },
                                relations: ["vendor", "product", "bill"],
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_5 = _c.sent();
                        error_5.level = "DB";
                        throw error_5;
                    case 3: return [2];
                }
            });
        });
    },
    upsert: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_6;
            var runner = _b.runner, id = _b.id, date = _b.date, productId = _b.productId, vendorId = _b.vendorId, amount = _b.amount, billId = _b.billId, quantity = _b.quantity;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.save({
                                id: id !== null && id !== void 0 ? id : (0, helpers_1.generateRandomHex)(),
                                date: date,
                                product: { id: productId },
                                quantity: +quantity,
                                vendor: { id: vendorId },
                                amount: +amount,
                                bill: { id: billId },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_6 = _c.sent();
                        error_6.level = "DB";
                        throw error_6;
                    case 3: return [2];
                }
            });
        });
    },
    createRaw: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var query, params, i, element, error_7;
            var items = _b.items, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        query = "INSERT INTO stock (id,date,productId,quantity,vendorId,amount,billId) VALUES ";
                        params = [];
                        for (i = 0; i < items.length; i++) {
                            element = items[i];
                            i !== 0 && (query += ",");
                            query += "(?,?,?,?,?,?,?)";
                            params.push((0, helpers_1.generateRandomHex)());
                            params.push(element.date);
                            params.push(element.productId);
                            params.push(element.quantity);
                            params.push(element.vendorId);
                            params.push(element.amount);
                            params.push(element.billId);
                        }
                        return [4, runner.query(query, params)];
                    case 1:
                        _c.sent();
                        return [2, true];
                    case 2:
                        error_7 = _c.sent();
                        error_7.level = "DB";
                        throw error_7;
                    case 3: return [2];
                }
            });
        });
    },
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_8;
            var _c;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Stock_1.Stock);
                        return [4, repo.delete({ id: id })];
                    case 1:
                        data = _d.sent();
                        return [2, ((_c = data.affected) !== null && _c !== void 0 ? _c : 0) > 0];
                    case 2:
                        error_8 = _d.sent();
                        error_8.level = "DB";
                        throw error_8;
                    case 3: return [2];
                }
            });
        });
    },
};
exports.default = stockRepository;
//# sourceMappingURL=stock.repository.js.map