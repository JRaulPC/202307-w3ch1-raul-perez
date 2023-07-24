import Component from "../Component/Component.js";
import { characters } from "../characters.js";

class CharacterComponent extends Component {
  character = characters;

  constructor(parentElement: Element, character: any) {
    super(parentElement, "article", "character");

    this.character = character;
  }

  render() {
    return "holi";
  }
}

export default CharacterComponent;
