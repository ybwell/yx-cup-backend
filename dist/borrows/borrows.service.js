"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.BorrowsService = void 0;
var common_1 = require("@nestjs/common");
var BorrowsService = /** @class */ (function () {
    function BorrowsService() {
        this.borrows = [];
    }
    BorrowsService.prototype.createBorrow = function (createBorrowDto) {
        var borrow = __assign({ id: Math.random() }, createBorrowDto);
        this.borrows.push(borrow);
        return borrow;
    };
    BorrowsService.prototype.findBorrowById = function (id) {
        return this.borrows.find(function (borrow) { return borrow.id === id; });
    };
    BorrowsService.prototype.getBorrowDetails = function (id) {
        // 借书详情的具体实现逻辑
        // 这里仅作为示例，你需要根据实际需求来实现该方法
        return this.borrows;
    };
    BorrowsService.prototype.getOverdueBorrows = function () {
        var currentDate = new Date();
        return this.borrows.filter(function (borrow) { return borrow.dueDate < currentDate; });
    };
    BorrowsService = __decorate([
        (0, common_1.Injectable)()
    ], BorrowsService);
    return BorrowsService;
}());
exports.BorrowsService = BorrowsService;
