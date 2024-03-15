"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stock = void 0;
var typeorm_1 = require("typeorm");
var Vendor_1 = require("./Vendor");
var Product_1 = require("./Product");
var Bill_1 = require("./Bill");
var Stock = (function () {
    function Stock() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({
            length: 100,
            type: "varchar",
        }),
        __metadata("design:type", String)
    ], Stock.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Vendor_1.Vendor; }, function (vendor) { return vendor.id; }, {
            onDelete: "SET NULL",
            nullable: true,
        }),
        (0, typeorm_1.JoinColumn)({ name: "vendorId" }),
        __metadata("design:type", Object)
    ], Stock.prototype, "vendor", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Product_1.Product; }, function (product) { return product.id; }, {
            onDelete: "CASCADE",
            nullable: false,
        }),
        (0, typeorm_1.JoinColumn)({ name: "productId" }),
        __metadata("design:type", Product_1.Product)
    ], Stock.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "datetime",
        }),
        __metadata("design:type", Date)
    ], Stock.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], Stock.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Bill_1.Bill; }, function (bill) { return bill.id; }, {
            onDelete: "SET NULL",
        }),
        (0, typeorm_1.JoinColumn)({ name: "billId" }),
        __metadata("design:type", Bill_1.Bill)
    ], Stock.prototype, "bill", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], Stock.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Stock.prototype, "inserted", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Stock.prototype, "updated", void 0);
    Stock = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Index)("idx_product", ["product"]),
        (0, typeorm_1.Index)("idx_vendor", ["vendor"])
    ], Stock);
    return Stock;
}());
exports.Stock = Stock;
//# sourceMappingURL=Stock.js.map