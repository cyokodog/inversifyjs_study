"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var inversify_config_1 = require("./inversify.config");
var services_1 = require("./services");
var samuraiA = inversify_config_1.container.get(services_1.Samurai);
var samuraiB = inversify_config_1.container.get(services_1.Samurai);
samuraiA.pwoerUp();
console.log(samuraiA.fight()); // ブウウウウンッ！！
console.log(samuraiB.fight()); // ブンッ！
