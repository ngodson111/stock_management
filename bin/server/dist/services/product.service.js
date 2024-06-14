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
var helpers_1 = __importDefault(require("../database/helpers"));
var product_repository_1 = __importDefault(require("../database/repositories/product.repository"));
var productService = {
    create: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, product, error_1;
            var buyingPrice = _b.buyingPrice, code = _b.code, description = _b.description, sellingPrice = _b.sellingPrice, tags = _b.tags, title = _b.title, rack = _b.rack;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, 6, 8]);
                        return [4, product_repository_1.default.findByCode({ code: code, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (doesExist)
                            throw new Error("Product code already exist");
                        return [4, product_repository_1.default.create({
                                buyingPrice: buyingPrice,
                                code: code,
                                description: description,
                                sellingPrice: sellingPrice,
                                tags: tags,
                                title: title,
                                rack: rack,
                                runner: runner,
                            })];
                    case 4:
                        product = _c.sent();
                        return [2, product];
                    case 5:
                        error_1 = _c.sent();
                        throw error_1;
                    case 6: return [4, runner.release()];
                    case 7:
                        _c.sent();
                        return [7];
                    case 8: return [2];
                }
            });
        });
    },
    update: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, doesCodeExist, _c, product, error_2;
            var buyingPrice = _b.buyingPrice, code = _b.code, description = _b.description, sellingPrice = _b.sellingPrice, tags = _b.tags, title = _b.title, rack = _b.rack, id = _b.id;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _d.sent();
                        _d.label = 2;
                    case 2:
                        _d.trys.push([2, 7, 8, 10]);
                        return [4, product_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        doesExist = _d.sent();
                        if (!doesExist)
                            throw new Error("Product not found");
                        _c = code;
                        if (!_c) return [3, 5];
                        return [4, product_repository_1.default.findByCode({
                                code: code,
                                runner: runner,
                            })];
                    case 4:
                        _c = (_d.sent());
                        _d.label = 5;
                    case 5:
                        doesCodeExist = _c;
                        if (code && doesCodeExist && doesCodeExist.code !== code)
                            throw new Error("Product code already exist");
                        return [4, product_repository_1.default.update({
                                id: id,
                                buyingPrice: buyingPrice,
                                code: code,
                                description: description,
                                sellingPrice: sellingPrice,
                                tags: tags,
                                title: title,
                                rack: rack,
                                quantity: doesExist.quantity.toString(),
                                runner: runner,
                            })];
                    case 6:
                        product = _d.sent();
                        return [2, product];
                    case 7:
                        error_2 = _d.sent();
                        throw error_2;
                    case 8: return [4, runner.release()];
                    case 9:
                        _d.sent();
                        return [7];
                    case 10: return [2];
                }
            });
        });
    },
    updateStock: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var newRunner, _c, doesExist, newQty, response, error_3, _d;
            var productId = _b.productId, quantity = _b.quantity, runner = _b.runner;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(runner !== null && runner !== void 0)) return [3, 1];
                        _c = runner;
                        return [3, 3];
                    case 1: return [4, helpers_1.default.createQueryRunner()];
                    case 2:
                        _c = (_e.sent());
                        _e.label = 3;
                    case 3:
                        newRunner = _c;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 7, 8, 11]);
                        return [4, product_repository_1.default.findById({
                                runner: newRunner,
                                id: productId,
                            })];
                    case 5:
                        doesExist = _e.sent();
                        if (!doesExist)
                            throw new Error("Product not found");
                        newQty = doesExist.quantity + quantity;
                        if (newQty < 0)
                            throw new Error("Quantity cannot be less than 0");
                        return [4, product_repository_1.default.update({
                                runner: runner,
                                id: productId,
                                quantity: newQty.toString(),
                            })];
                    case 6:
                        response = _e.sent();
                        return [2, response];
                    case 7:
                        error_3 = _e.sent();
                        throw error_3;
                    case 8:
                        _d = !runner;
                        if (!_d) return [3, 10];
                        return [4, newRunner.release()];
                    case 9:
                        _d = (_e.sent());
                        _e.label = 10;
                    case 10:
                        _d;
                        return [7];
                    case 11: return [2];
                }
            });
        });
    },
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, product, error_4;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, 6, 8]);
                        return [4, product_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (!doesExist)
                            throw new Error("Product not found");
                        return [4, product_repository_1.default.delete({ id: id, runner: runner })];
                    case 4:
                        product = _c.sent();
                        return [2, product];
                    case 5:
                        error_4 = _c.sent();
                        throw error_4;
                    case 6: return [4, runner.release()];
                    case 7:
                        _c.sent();
                        return [7];
                    case 8: return [2];
                }
            });
        });
    },
    find: function (opt) {
        return __awaiter(this, void 0, void 0, function () {
            var runner, products, error_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 7]);
                        return [4, product_repository_1.default.find({ runner: runner, q: opt === null || opt === void 0 ? void 0 : opt.q })];
                    case 3:
                        products = _a.sent();
                        return [2, products];
                    case 4:
                        error_5 = _a.sent();
                        throw error_5;
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
            var newRunner, _c, product, error_6, _d;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(runner !== null && runner !== void 0)) return [3, 1];
                        _c = runner;
                        return [3, 3];
                    case 1: return [4, helpers_1.default.createQueryRunner()];
                    case 2:
                        _c = (_e.sent());
                        _e.label = 3;
                    case 3:
                        newRunner = _c;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 6, 7, 10]);
                        return [4, product_repository_1.default.findById({
                                id: id,
                                runner: newRunner,
                            })];
                    case 5:
                        product = _e.sent();
                        if (!product)
                            throw new Error("Unable to find product");
                        return [2, product];
                    case 6:
                        error_6 = _e.sent();
                        throw error_6;
                    case 7:
                        _d = !runner;
                        if (!_d) return [3, 9];
                        return [4, newRunner.release()];
                    case 8:
                        _d = (_e.sent());
                        _e.label = 9;
                    case 9:
                        _d;
                        return [7];
                    case 10: return [2];
                }
            });
        });
    },
    findByList: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var newRunner, _c, data, error_7, _d;
            var productList = _b.productList, runner = _b.runner;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!(runner !== null && runner !== void 0)) return [3, 1];
                        _c = runner;
                        return [3, 3];
                    case 1: return [4, helpers_1.default.createQueryRunner()];
                    case 2:
                        _c = (_e.sent());
                        _e.label = 3;
                    case 3:
                        newRunner = _c;
                        _e.label = 4;
                    case 4:
                        _e.trys.push([4, 6, 7, 10]);
                        return [4, product_repository_1.default.findByList({
                                list: productList,
                                runner: newRunner,
                            })];
                    case 5:
                        data = _e.sent();
                        return [2, data];
                    case 6:
                        error_7 = _e.sent();
                        throw error_7;
                    case 7:
                        _d = !runner;
                        if (!_d) return [3, 9];
                        return [4, newRunner.release()];
                    case 8:
                        _d = (_e.sent());
                        _e.label = 9;
                    case 9:
                        _d;
                        return [7];
                    case 10: return [2];
                }
            });
        });
    },
    events: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var _c, error_8;
            var data = _b.data, type = _b.type;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 10, , 11]);
                        _c = type;
                        switch (_c) {
                            case "product": return [3, 1];
                        }
                        return [3, 8];
                    case 1:
                        if (!(data.action === "updateStock")) return [3, 3];
                        return [4, this.updateStock(data.payload)];
                    case 2: return [2, _d.sent()];
                    case 3:
                        if (!(data.action === "findByProductList")) return [3, 5];
                        console.log(data);
                        return [4, this.findByList(data.payload)];
                    case 4: return [2, _d.sent()];
                    case 5:
                        if (!(data.action === "findById")) return [3, 7];
                        return [4, this.findById(data.payload)];
                    case 6: return [2, _d.sent()];
                    case 7: return [2];
                    case 8: return [2];
                    case 9: return [3, 11];
                    case 10:
                        error_8 = _d.sent();
                        throw error_8;
                    case 11: return [2];
                }
            });
        });
    },
};
exports.default = productService;
//# sourceMappingURL=product.service.js.map