import { CharacterData } from "../../types";

class Character {
  isAlive = true;
  series = "Game of Thrones";
  characterData: CharacterData;

  constructor(characterData: CharacterData) {
    this.characterData = characterData;
  }

  communicate() {
    return `${this.characterData.name} says`;
  }

  die() {
    this.isAlive = false;
  }
}

export default Character;
