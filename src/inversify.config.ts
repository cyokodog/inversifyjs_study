import { Container } from "inversify";
import { Samurai, Katana } from "./services";

const rootContainer = new Container();
rootContainer.bind(Katana).toSelf();
rootContainer
  .bind(Samurai)
  .toSelf()
  .inSingletonScope();

export const container = rootContainer.createChild();
