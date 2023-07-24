import AppComponent from "./components/AppComponent/AppComponent.js";
const appContainer: Element = document.querySelector(".app-container")!;

const containerTest = new AppComponent(appContainer);
containerTest.render();
