import { ProxyState } from "../AppState.js";
import { planetService } from "../Services/PlanetService.js";


//Private
function _draw() {
  let values = ProxyState.values;
  let template = ''
  values.forEach(v => template += v.Template)
  document.getElementById("app").innerHTML = /*html*/`
  <div className="card-columns values">
  ${template}
  </div>
  `
}

{/* <button className="btn btn-info" onclick="app.valuesController.addValue()">Add Value</button>   */}
//Public
export default class PlanetController {
  constructor() {
    ProxyState.on("values", _draw);
    _draw()
  }

  addValue() {
    planetService.addValue()
  }

}