import { ProxyState } from "../AppState.js";
import Planet from "../Models/Planet.js";

class PlanetService {
  addValue() {
    ProxyState.values = [...ProxyState.values, new Planet({ title: Math.random() })]
  }
}

export const planetService = new PlanetService();

