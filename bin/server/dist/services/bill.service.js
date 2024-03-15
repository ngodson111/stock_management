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
var bill_repository_1 = __importDefault(require("../database/repositories/bill.repository"));
var billService = {
    create: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var newRunner, _c, bill, _d, error_1, _e, _f;
            var billId = _b.billId, date = _b.date, vendorId = _b.vendorId, amount = _b.amount, billNumber = _b.billNumber, runner = _b.runner;
            return __generator(this, function (_g) {
                switch (_g.label) {
                    case 0:
                        _c = runner;
                        if (_c) return [3, 2];
                        return [4, helpers_1.default.createTransaction()];
                    case 1:
                        _c = (_g.sent());
                        _g.label = 2;
                    case 2:
                        newRunner = _c;
                        _g.label = 3;
                    case 3:
                        _g.trys.push([3, 7, 10, 13]);
                        return [4, bill_repository_1.default.upsert({
                                id: billId,
                                date: date,
                                vendorId: vendorId,
                                amount: amount,
                                billNumber: billNumber,
                                runner: newRunner,
                            })];
                    case 4:
                        bill = _g.sent();
                        _d = !runner;
                        if (!_d) return [3, 6];
                        return [4, newRunner.commitTransaction()];
                    case 5:
                        _d = (_g.sent());
                        _g.label = 6;
                    case 6:
                        _d;
                        return [2, bill];
                    case 7:
                        error_1 = _g.sent();
                        _e = !runner;
                        if (!_e) return [3, 9];
                        return [4, newRunner.rollbackTransaction()];
                    case 8:
                        _e = (_g.sent());
                        _g.label = 9;
                    case 9:
                        _e;
                        throw error_1;
                    case 10:
                        _f = !runner;
                        if (!_f) return [3, 12];
                        return [4, newRunner.release()];
                    case 11:
                        _f = (_g.sent());
                        _g.label = 12;
                    case 12:
                        _f;
                        return [7];
                    case 13: return [2];
                }
            });
        });
    },
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, bill, error_2;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, 6, 8]);
                        return [4, bill_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (!doesExist)
                            throw new Error("Bill not found");
                        return [4, bill_repository_1.default.delete({ id: id, runner: runner })];
                    case 4:
                        bill = _c.sent();
                        return [2, bill];
                    case 5:
                        error_2 = _c.sent();
                        throw error_2;
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
            var runner, bills, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 7]);
                        return [4, bill_repository_1.default.find({ runner: runner, opt: opt })];
                    case 3:
                        bills = _a.sent();
                        return [2, bills];
                    case 4:
                        error_3 = _a.sent();
                        throw error_3;
                    case 5: return [4, runner.release()];
                    case 6:
                        _a.sent();
                        return [7];
                    case 7: return [2];
                }
            });
        });
    },
    findByVendor: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, bills, error_4;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, 5, 7]);
                        return [4, bill_repository_1.default.findByVendor({
                                id: id,
                                runner: runner,
                            })];
                    case 3:
                        bills = _c.sent();
                        return [2, bills];
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
    findById: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, bill, error_5;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 4, 5, 7]);
                        return [4, bill_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        bill = _c.sent();
                        if (!bill)
                            throw new Error("Unable to find bill");
                        return [2, bill];
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
};
exports.default = billService;
//# sourceMappingURL=bill.service.js.map