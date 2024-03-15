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
var vendor_repository_1 = __importDefault(require("../database/repositories/vendor.repository"));
var vendorService = {
    create: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, vendor, error_1;
            var address = _b.address, name = _b.name, contact = _b.contact;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, 6, 8]);
                        return [4, vendor_repository_1.default.findByName({ name: name, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (doesExist)
                            throw new Error("Vendor name already exist");
                        return [4, vendor_repository_1.default.upsert({
                                address: address,
                                name: name,
                                runner: runner,
                                contact: contact,
                            })];
                    case 4:
                        vendor = _c.sent();
                        return [2, vendor];
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
            var runner, doesExist, doesNameExist, vendor, error_2;
            var address = _b.address, name = _b.name, id = _b.id, contact = _b.contact;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 6, 7, 9]);
                        return [4, vendor_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (!doesExist)
                            throw new Error("Vendor not found");
                        return [4, vendor_repository_1.default.findByName({ name: name, runner: runner })];
                    case 4:
                        doesNameExist = _c.sent();
                        if (doesNameExist && doesExist.id !== id)
                            throw new Error("Vendor name already exist");
                        return [4, vendor_repository_1.default.upsert({
                                id: id,
                                address: address,
                                name: name,
                                runner: runner,
                                contact: contact,
                            })];
                    case 5:
                        vendor = _c.sent();
                        return [2, vendor];
                    case 6:
                        error_2 = _c.sent();
                        throw error_2;
                    case 7: return [4, runner.release()];
                    case 8:
                        _c.sent();
                        return [7];
                    case 9: return [2];
                }
            });
        });
    },
    delete: function (_a) {
        return __awaiter(this, arguments, void 0, function (_b) {
            var runner, doesExist, vendor, error_3;
            var id = _b.id;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _c.sent();
                        _c.label = 2;
                    case 2:
                        _c.trys.push([2, 5, 6, 8]);
                        return [4, vendor_repository_1.default.findById({ id: id, runner: runner })];
                    case 3:
                        doesExist = _c.sent();
                        if (!doesExist)
                            throw new Error("Vendor not found");
                        return [4, vendor_repository_1.default.delete({ id: id, runner: runner })];
                    case 4:
                        vendor = _c.sent();
                        return [2, vendor];
                    case 5:
                        error_3 = _c.sent();
                        throw error_3;
                    case 6: return [4, runner.release()];
                    case 7:
                        _c.sent();
                        return [7];
                    case 8: return [2];
                }
            });
        });
    },
    find: function () {
        return __awaiter(this, void 0, void 0, function () {
            var runner, vendors, error_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, helpers_1.default.createQueryRunner()];
                    case 1:
                        runner = _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, 5, 7]);
                        return [4, vendor_repository_1.default.find({ runner: runner })];
                    case 3:
                        vendors = _a.sent();
                        return [2, vendors];
                    case 4:
                        error_4 = _a.sent();
                        throw error_4;
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
            var newRunner, _c, vendor, error_5, _d;
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
                        return [4, vendor_repository_1.default.findById({
                                id: id,
                                runner: newRunner,
                            })];
                    case 5:
                        vendor = _e.sent();
                        if (!vendor)
                            throw new Error("Unable to find vendor");
                        return [2, vendor];
                    case 6:
                        error_5 = _e.sent();
                        throw error_5;
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
            var _c, error_6;
            var data = _b.data, type = _b.type;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _d.trys.push([0, 6, , 7]);
                        _c = type;
                        switch (_c) {
                            case "vendor": return [3, 1];
                        }
                        return [3, 4];
                    case 1:
                        if (!(data.action === "findById")) return [3, 3];
                        return [4, this.findById(data.payload)];
                    case 2: return [2, _d.sent()];
                    case 3: return [2];
                    case 4: return [2];
                    case 5: return [3, 7];
                    case 6:
                        error_6 = _d.sent();
                        throw error_6;
                    case 7: return [2];
                }
            });
        });
    },
};
exports.default = vendorService;
//# sourceMappingURL=vendor.service.js.map