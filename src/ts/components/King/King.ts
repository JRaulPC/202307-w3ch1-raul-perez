import { CharacterData } from "../../types.js";
import Character from "../Character/Character.js";

class King extends Character {
  yearsOfReign: number;

  constructor(characterData: CharacterData, yearsOfReign: number) {
    super(characterData);
    this.yearsOfReign = yearsOfReign;
  }

  commmunicate() {
    return `${super.communicate()}Everybody will die`;
  }
}

export default King;
