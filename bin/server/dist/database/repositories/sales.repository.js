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
var Sales_1 = require("../models/Sales");
var helpers_1 = require("../../utils/helpers");
var SalesItem_1 = require("../models/SalesItem");
var salesRepository = {
    findByType: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_1;
            var type = _b.type, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.find({
                                where: { type: type },
                                order: { date: "desc" },
                                relations: ["member"],
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
    findByMemberId: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_2;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.find({
                                where: { member: { id: id } },
                                order: { date: "desc" },
                                relations: ["member"],
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
    findById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, items, error_3;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 3, , 4]);
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.findOne({
                                where: { id: id },
                                relations: ["member"],
                            })];
                    case 1:
                        data = _c.sent();
                        return [4, this.findItems({ runner: runner, id: id })];
                    case 2:
                        items = _c.sent();
                        return [2, { sales: data, items: items }];
                    case 3:
                        error_3 = _c.sent();
                        error_3.level = "DB";
                        throw error_3;
                    case 4: return [2];
                }
            });
        });
    },
    find: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var filter, repo, data, error_4;
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
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.find({
                                where: filter,
                                order: { inserted: "desc" },
                                relations: ["member"],
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
    create: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_5;
            var runner = _b.runner, id = _b.id, date = _b.date, amount = _b.amount, discount = _b.discount, type = _b.type, memberId = _b.memberId, remark = _b.remark;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        console.log(memberId);
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.save({
                                id: id !== null && id !== void 0 ? id : (0, helpers_1.generateRandomHex)(),
                                date: date,
                                member: memberId ? { id: memberId } : undefined,
                                amount: +amount,
                                discount: +discount,
                                type: type,
                                remark: remark,
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
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_6;
            var _c;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Sales_1.Sales);
                        return [4, repo.delete({ id: id })];
                    case 1:
                        data = _d.sent();
                        return [2, ((_c = data.affected) !== null && _c !== void 0 ? _c : 0) > 0];
                    case 2:
                        error_6 = _d.sent();
                        error_6.level = "DB";
                        throw error_6;
                    case 3: return [2];
                }
            });
        });
    },
    createItem: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_7;
            var runner = _b.runner, id = _b.id, amount = _b.amount, productId = _b.productId, quantity = _b.quantity, title = _b.title;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(SalesItem_1.SalesItem);
                        return [4, repo.save({
                                id: (0, helpers_1.generateRandomHex)(),
                                amount: amount,
                                product: { id: productId },
                                quantity: +quantity,
                                sales: { id: id },
                                title: title,
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_7 = _c.sent();
                        error_7.level = "DB";
                        throw error_7;
                    case 3: return [2];
                }
            });
        });
    },
    findItemById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_8;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(SalesItem_1.SalesItem);
                        return [4, repo.findOne({ where: { id: id } })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_8 = _c.sent();
                        error_8.level = "DB";
                        throw error_8;
                    case 3: return [2];
                }
            });
        });
    },
    findItems: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_9;
            var runner = _b.runner, id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(SalesItem_1.SalesItem);
                        return [4, repo.find({
                                where: { sales: { id: id } },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_9 = _c.sent();
                        error_9.level = "DB";
                        throw error_9;
                    case 3: return [2];
                }
            });
        });
    },
};
exports.default = salesRepository;
//# sourceMappingURL=sales.repository.js.map