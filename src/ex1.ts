import "reflect-metadata";
import { container } from "./inversify.config";
import { Samurai } from "./services";

const samurai = container.get(Samurai);

console.log(samurai.fight()); // ブンッ！
samurai.pwoerUp();
console.log(samurai.fight()); // ブウウウウンッ！！
