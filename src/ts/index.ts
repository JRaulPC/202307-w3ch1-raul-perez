import AppComponent from "./components/AppComponent/AppComponent.js";

const appContainer: Element = document.querySelector(".container")!;

const containerTest = new AppComponent(appContainer);

containerTest.render();
