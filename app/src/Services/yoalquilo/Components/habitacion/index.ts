//  COMPONENT CONFIG
const component = "habitacion"; // COMPONENT NAME
const version = "1.0";
// ---------------------------------------


import Lista from "./Pages/Lista.js";
import Registro from "./Pages/Registro";

export default {
    component,
    version,
    Pages: {
        [component]: Lista,
        [component + "/registro"]: Registro,
    }
}