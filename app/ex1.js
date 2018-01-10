"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var services_1 = require("./services");
var samurai = inversify_config_1.container.get(services_1.Samurai);
console.log(samurai.fight()); // ブンッ！
samurai.pwoerUp();
console.log(samurai.fight()); // ブウウウウンッ！！
