import { CharacterData } from "../../types";
import Character from "../Character/Character";

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
