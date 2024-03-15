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
exports.SalesItem = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var Sales_1 = require("./Sales");
var SalesItem = (function () {
    function SalesItem() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({
            length: 100,
            type: "varchar",
        }),
        __metadata("design:type", String)
    ], SalesItem.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Sales_1.Sales; }, function (sales) { return sales.id; }, {
            onDelete: "CASCADE",
        }),
        (0, typeorm_1.JoinColumn)({ name: "salesId" }),
        __metadata("design:type", Sales_1.Sales)
    ], SalesItem.prototype, "sales", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Product_1.Product; }, function (product) { return product.id; }, {
            onDelete: "SET NULL",
            nullable: true,
        }),
        (0, typeorm_1.JoinColumn)({ name: "productId" }),
        __metadata("design:type", Object)
    ], SalesItem.prototype, "product", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
        }),
        __metadata("design:type", String)
    ], SalesItem.prototype, "title", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], SalesItem.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], SalesItem.prototype, "quantity", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], SalesItem.prototype, "inserted", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], SalesItem.prototype, "updated", void 0);
    SalesItem = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Index)("idx_sales", ["sales"])
    ], SalesItem);
    return SalesItem;
}());
exports.SalesItem = SalesItem;
//# sourceMappingURL=SalesItem.js.map