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
exports.Sales = void 0;
var typeorm_1 = require("typeorm");
var Member_1 = require("./Member");
var Sales = (function () {
    function Sales() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({
            length: 100,
            type: "varchar",
        }),
        __metadata("design:type", String)
    ], Sales.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "enum",
            enum: ["Credit", "Cash", "Online"],
        }),
        __metadata("design:type", Object)
    ], Sales.prototype, "type", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], Sales.prototype, "amount", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "double",
        }),
        __metadata("design:type", Number)
    ], Sales.prototype, "discount", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "datetime",
        }),
        __metadata("design:type", Date)
    ], Sales.prototype, "date", void 0);
    __decorate([
        (0, typeorm_1.ManyToOne)(function (type) { return Member_1.Member; }, function (member) { return member.id; }, {
            onDelete: "SET NULL",
            nullable: true,
        }),
        (0, typeorm_1.JoinColumn)({ name: "memberId" }),
        __metadata("design:type", Object)
    ], Sales.prototype, "member", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            nullable: true,
        }),
        __metadata("design:type", String)
    ], Sales.prototype, "remark", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Sales.prototype, "inserted", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Sales.prototype, "updated", void 0);
    Sales = __decorate([
        (0, typeorm_1.Entity)(),
        (0, typeorm_1.Index)("idx_member", ["member"])
    ], Sales);
    return Sales;
}());
exports.Sales = Sales;
//# sourceMappingURL=Sales.js.map