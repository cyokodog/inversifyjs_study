import "reflect-metadata";
import { container } from "./inversify.config";
import { Samurai } from "./services";

const samuraiA = container.get(Samurai);
const samuraiB = container.get(Samurai);

samuraiA.pwoerUp();
console.log(samuraiA.fight()); // ブウウウウンッ！！
console.log(samuraiB.fight()); // ブンッ！
