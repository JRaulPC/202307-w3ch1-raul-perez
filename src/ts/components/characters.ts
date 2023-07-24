import Fighter from "./Fighter/Fighter.js";
import King from "./King/King.js";
import Squire from "./Squire/Squire.js";

import {
  bronnCharacterData,
  jaimeCharacterData,
  joffreyCharacterData,
} from "../data/index.js";

const joffrey = new King(joffreyCharacterData, 2);
const jaime = new Fighter(jaimeCharacterData, "sword", 7);
const bronn = new Squire(bronnCharacterData, 0, jaime);

export const characters = [joffrey, jaime, bronn];
