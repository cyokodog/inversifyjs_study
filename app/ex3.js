"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_1 = require("inversify");
var inversify_config_1 = require("./inversify.config");
var services_1 = require("./services");
var KatanaMock = /** @class */ (function () {
    function KatanaMock() {
        this.sound = "スカッ！";
    }
    KatanaMock.prototype.swing = function () {
        return this.sound + "(mock)";
    };
    KatanaMock = __decorate([
        inversify_1.injectable()
    ], KatanaMock);
    return KatanaMock;
}());
exports.KatanaMock = KatanaMock;
inversify_config_1.container.bind(services_1.Katana).to(KatanaMock);
var samuraiA = inversify_config_1.container.get(services_1.Samurai);
var samuraiB = inversify_config_1.container.get(services_1.Samurai);
console.log(samuraiA.fight()); // スカッ！(mock)
samuraiA.pwoerUp();
console.log(samuraiB.fight()); // ブウウウウンッ！！(mock)
