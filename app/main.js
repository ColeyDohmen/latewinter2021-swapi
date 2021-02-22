import ValuesController from "./Controllers/ValuesController.js";
import CharactersController from "./Controllers/CharactersController.js";
import PlanetController from "./Controllers/PlanetController.js";

class App {
  valuesController = new ValuesController();
  charactersController = new CharactersController();

  planetController = new PlanetController();

}

window["app"] = new App();
