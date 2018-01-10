import "reflect-metadata";
import { injectable } from "inversify";
import { container } from "./inversify.config";
import { Samurai, Katana } from "./services";

@injectable()
export class KatanaMock implements Katana {
  sound = "スカッ！";

  swing() {
    return this.sound + "(mock)";
  }
}
container.bind(Katana).to(KatanaMock);

const samuraiA = container.get(Samurai);
const samuraiB = container.get(Samurai);

console.log(samuraiA.fight()); // スカッ！(mock)
samuraiA.pwoerUp();
console.log(samuraiB.fight()); // ブウウウウンッ！！(mock)
