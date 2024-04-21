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
var helpers_1 = require("../../utils/helpers");
var typeorm_1 = require("typeorm");
var Product_1 = require("../models/Product");
var productRepository = {
    findByCode: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_1;
            var code = _b.code, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.findOne({ where: { code: code } })];
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
    findById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_2;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.findOne({ where: { id: id } })];
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
    find: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_3;
            var runner = _b.runner, q = _b.q;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, (!q
                                ? repo.find({ order: { inserted: "desc" } })
                                : repo.find({
                                    where: [
                                        { id: q },
                                        { title: (0, typeorm_1.Like)("%".concat(q, "%")) },
                                        { tags: (0, typeorm_1.Like)("%".concat(q, "%")) },
                                        { code: (0, typeorm_1.Like)("%".concat(q, "%")) },
                                        { description: (0, typeorm_1.Like)("%".concat(q, "%")) },
                                        { rack: (0, typeorm_1.Like)("%".concat(q, "%")) },
                                    ],
                                    order: { inserted: "desc" },
                                }))];
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
    findByList: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_4;
            var runner = _b.runner, list = _b.list;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.find({
                                where: {
                                    id: (0, typeorm_1.In)(list),
                                },
                            })];
                    case 1:
                        data = _c.sent();
                        return [2, data];
                    case 2:
                        error_4 = _c.sent();
                        console.log(error_4);
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
            var buyingPrice = _b.buyingPrice, code = _b.code, description = _b.description, sellingPrice = _b.sellingPrice, tags = _b.tags, title = _b.title, rack = _b.rack, runner = _b.runner, id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.save({
                                id: id !== null && id !== void 0 ? id : (0, helpers_1.generateRandomHex)(),
                                code: code,
                                title: title,
                                description: description,
                                tags: tags,
                                rack: rack || undefined,
                                buyingPrice: +buyingPrice,
                                sellingPrice: +sellingPrice,
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
    update: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_6;
            var rack = _b.rack, buyingPrice = _b.buyingPrice, code = _b.code, description = _b.description, sellingPrice = _b.sellingPrice, tags = _b.tags, title = _b.title, quantity = _b.quantity, runner = _b.runner, id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        _c.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.save({
                                id: id,
                                code: code,
                                title: title,
                                description: description,
                                rack: rack || undefined,
                                tags: tags,
                                buyingPrice: buyingPrice ? +buyingPrice : undefined,
                                sellingPrice: sellingPrice ? +sellingPrice : undefined,
                                quantity: quantity ? +quantity : 0,
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
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var repo, data, error_7;
            var _c;
            var id = _b.id, runner = _b.runner;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 2, , 3]);
                        repo = runner.manager.getRepository(Product_1.Product);
                        return [4, repo.delete({ id: id })];
                    case 1:
                        data = _d.sent();
                        return [2, ((_c = data.affected) !== null && _c !== void 0 ? _c : 0) > 0];
                    case 2:
                        error_7 = _d.sent();
                        error_7.level = "DB";
                        throw error_7;
                    case 3: return [2];
                }
            });
        });
    },
};
exports.default = productRepository;
//# sourceMappingURL=product.repository.js.map