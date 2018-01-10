"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var services_1 = require("./services");
var rootContainer = new inversify_1.Container();
rootContainer.bind(services_1.Katana).toSelf();
rootContainer
    .bind(services_1.Samurai)
    .toSelf()
    .inSingletonScope();
exports.container = rootContainer.createChild();
