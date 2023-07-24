import { jaimeCharacterData } from "../../data/index.js";
import Component from "../Component/Component.js";
import King from "../King/King.js";

class AppComponent extends Component {
  constructor(parentElement: Element) {
    super(parentElement, "ul", "character-list");
  }

  render() {
    const kingComponent = new King(jaimeCharacterData, 6);
    this.element.innerHTML = `
      <article class="character">
          <div class="card character__card">
            <img src="${kingComponent.characterData.imageSource}" alt="Character's Name and family" class="character__picture card-img-top" />
            <div class="card-body">
              <h2 class="character__name card-title h4">Name & family</h2>
              <div class="character__info">
                <ul class="list-unstyled">
                  <li>Age: X yrs</li>
                  <li>
                    State:
                    <i class="fas fa-thumbs-down"></i>
                    <i class="fas fa-thumbs-up"></i>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>`;
  }
}

export default AppComponent;
