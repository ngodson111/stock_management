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
exports.Member = void 0;
var typeorm_1 = require("typeorm");
var Member = (function () {
    function Member() {
    }
    __decorate([
        (0, typeorm_1.PrimaryColumn)({
            length: 100,
            type: "varchar",
        }),
        __metadata("design:type", String)
    ], Member.prototype, "id", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
            unique: true,
        }),
        __metadata("design:type", String)
    ], Member.prototype, "phone", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
        }),
        __metadata("design:type", String)
    ], Member.prototype, "fullName", void 0);
    __decorate([
        (0, typeorm_1.Column)({
            type: "text",
        }),
        __metadata("design:type", String)
    ], Member.prototype, "address", void 0);
    __decorate([
        (0, typeorm_1.CreateDateColumn)(),
        __metadata("design:type", Date)
    ], Member.prototype, "inserted", void 0);
    __decorate([
        (0, typeorm_1.UpdateDateColumn)(),
        __metadata("design:type", Date)
    ], Member.prototype, "updated", void 0);
    Member = __decorate([
        (0, typeorm_1.Entity)()
    ], Member);
    return Member;
}());
exports.Member = Member;
//# sourceMappingURL=Member.js.map