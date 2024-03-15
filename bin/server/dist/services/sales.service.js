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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("../database/helpers"));
var product_service_1 = __importDefault(require("./product.service"));
var sales_repository_1 = __importDefault(require("../database/repositories/sales.repository"));
var member_service_1 = __importDefault(require("./member.service"));
var helpers_2 = require("../utils/helpers");
var salesServicce = {
    create: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, _c, _d, amount, salesItems, salesId_1, salesPromise, productUpdatePromises, _e, sales, error_1;
            var _this = this;
            var date = _b.date, discount = _b.discount, items = _b.items, type = _b.type, memberId = _b.memberId, remark = _b.remark;
            return __generator(this, function (_f) {
                switch (_f.label) {
                    case 0: return [4, helpers_1.default.createTransaction()];
                    case 1:
                        runner = _f.sent();
                        _f.label = 2;
                    case 2:
                        _f.trys.push([2, 8, 10, 12]);
                        _c = memberId;
                        if (!_c) return [3, 4];
                        return [4, this.memberExists(runner, memberId)];
                    case 3:
                        _c = !(_f.sent());
                        _f.label = 4;
                    case 4:
                        if (_c)
                            throw new Error("Member doesnt exist");
                        return [4, this.calculateAmountAndItems(runner, items)];
                    case 5:
                        _d = _f.sent(), amount = _d.amount, salesItems = _d.salesItems;
                        if (+discount > +amount)
                            throw new Error("Discount cannot be greater than amount");
                        salesId_1 = (0, helpers_2.generateRandomHex)();
                        salesPromise = sales_repository_1.default.create({
                            amount: amount,
                            date: date,
                            discount: discount,
                            type: type,
                            id: salesId_1,
                            memberId: memberId,
                            remark: remark,
                            runner: runner,
                        });
                        productUpdatePromises = salesItems.map(function (item) { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!item.sellingPrice)
                                            throw new Error("Invalid selling price for " + item.title);
                                        return [4, sales_repository_1.default.createItem({
                                                amount: +item.sellingPrice,
                                                productId: item.productId,
                                                quantity: item.quantity,
                                                title: item.title,
                                                id: salesId_1,
                                                runner: runner,
                                            })];
                                    case 1:
                                        _a.sent();
                                        return [4, this.updateProductStock(runner, item.productId, -item.quantity)];
                                    case 2:
                                        _a.sent();
                                        return [2];
                                }
                            });
                        }); });
                        return [4, Promise.all(__spreadArray([
                                salesPromise
                            ], productUpdatePromises, true))];
                    case 6:
                        _e = _f.sent(), sales = _e[0];
                        return [4, runner.commitTransaction()];
                    case 7:
                        _f.sent();
                        return [2, sales];
                    case 8:
                        error_1 = _f.sent();
                        return [4, runner.rollbackTransaction()];
                    case 9:
                        _f.sent();
                        throw error_1;
                    case 10: return [4, runner.release()];
                    case 11:
                        _f.sent();
                        return [7];
                    case 12: return [2];
                }
            });
        });
    },
    find: function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var runner, sales, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 7]);
                        return [4, sales_repository_1.default.find({ runner: runner, opt: opt })];
                    case 3:
                        sales = _a.sent();
                        return [2, sales];
                    case 4:
                        error_2 = _a.sent();
                        throw error_2;
                    case 5: return [4, runner.release()];
                    case 6:
                        _a.sent();
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    findById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, sales, error_3;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, 5, 7]);
                        return [4, sales_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        sales = _c.sent();
                        if (!sales)
                            throw new Error("Unable to find sales");
                        return [2, sales];
                    case 4:
                        error_3 = _c.sent();
                        throw error_3;
                    case 5: return [4, runner.release()];
                    case 6:
                        _c.sent();
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    findByMemberId: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, sales, error_4;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, 5, 7]);
                        return [4, sales_repository_1.default.findByMemberId({ id: id, runner: runner })];
                    case 3:
                        sales = _c.sent();
                        if (!sales)
                            throw new Error("Unable to find sales");
                        return [2, sales];
                    case 4:
                        error_4 = _c.sent();
                        throw error_4;
                    case 5: return [4, runner.release()];
                    case 6:
                        _c.sent();
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    findByType: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, sales, error_5;
            var type = _b.type;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, 5, 7]);
                        return [4, sales_repository_1.default.findByType({ type: type, runner: runner })];
                    case 3:
                        sales = _c.sent();
                        return [2, sales];
                    case 4:
                        error_5 = _c.sent();
                        throw error_5;
                    case 5: return [4, runner.release()];
                    case 6:
                        _c.sent();
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    events: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var _c;
            var data = _b.data, type = _b.type;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _c = type;
                        switch (_c) {
                            case "product": return [3, 1];
                            case "member": return [3, 3];
                        }
                        return [3, 5];
                    case 1: return [4, product_service_1.default.events({ type: type, data: data })];
                    case 2: return [2, (_d.sent())];
                    case 3: return [4, member_service_1.default.events({ type: type, data: data })];
                    case 4: return [2, (_d.sent())];
                    case 5: return [2];
                }
            });
        });
    },
    memberExists: function (runner, memberId) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.events({
                            type: "member",
                            data: {
                                action: "findByMemberId",
                                payload: { runner: runner, id: memberId },
                            },
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
    calculateAmountAndItems: function (runner, items) {
        return __awaiter(this, void 0, void 0, function () {
            var salesItems, i, element, products, amount, i, item, product, error_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        salesItems = {};
                        for (i = 0; i < items.length; i++) {
                            element = items[i];
                            salesItems[element.productId] = element;
                        }
                        console.log(salesItems);
                        return [4, this.events({
                                type: "product",
                                data: {
                                    action: "findByProductList",
                                    payload: { productList: Object.keys(salesItems), runner: runner },
                                },
                            })];
                    case 1:
                        products = _a.sent();
                        if (!products)
                            throw new Error("Invalid product");
                        if (products.length < 1)
                            throw new Error("Atleast one product is required");
                        amount = 0;
                        for (i = 0; i < products.length; i++) {
                            item = products[i];
                            product = salesItems[item.id];
                            if (!product)
                                throw new Error("Invalid Product details");
                            if (item.quantity < +product.quantity)
                                throw new Error("".concat(product.title, " is out of stock"));
                            !product.sellingPrice &&
                                (product.sellingPrice = item.sellingPrice.toString());
                            amount +=
                                (+product.sellingPrice || item.sellingPrice) * +product.quantity;
                        }
                        return [2, { amount: amount, salesItems: Object.values(salesItems) }];
                    case 2:
                        error_6 = _a.sent();
                        throw error_6;
                    case 3: return [2];
                }
            });
        });
    },
    updateProductStock: function (runner, productId, quantityChange) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.events({
                            type: "product",
                            data: {
                                action: "updateStock",
                                payload: {
                                    productId: productId,
                                    quantity: quantityChange,
                                    runner: runner,
                                },
                            },
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    },
};
exports.default = salesServicce;
//# sourceMappingURL=sales.service.js.map