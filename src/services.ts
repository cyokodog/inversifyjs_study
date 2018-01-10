import { injectable } from "inversify";

@injectable()
export class Katana {
  sound = "ブンッ！";

  swing() {
    return this.sound;
  }
}

@injectable()
export class Samurai {
  constructor(private katana: Katana) {}

  fight() {
    return this.katana.swing();
  }

  pwoerUp() {
    this.katana.sound = "ブウウウウンッ！！";
  }
}
