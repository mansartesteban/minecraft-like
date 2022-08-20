import Input from "./Input";
import InputsDefinitions from "./InputsDefinitions";
class Menu {
    constructor(name = "", title = "") {
        this.name = name;
        this.title = title;
        this.inputs = [];
    }
    getName() {
        return this.name;
    }
    addInput(options, callback) {
        if (!options.type || !InputsDefinitions.isValidType(options.type))
            throw new Error("Please provide a valid input type. Accepted values : '" + Input.getTypes().join("', '") + "'");
        this.inputs.push(new InputsDefinitions.TYPE_CLASSES[options.type](options, callback));
    }
    createDomElement() {
        let menu = document.createElement("div");
        menu.classList.add("gui-menu");
        let header = document.createElement("div");
        header.classList.add("gui-menu-header");
        header.innerText = this.title;
        let body = document.createElement("div");
        body.classList.add("gui-menu-body");
        this.body = body;
        menu.appendChild(header);
        menu.appendChild(body);
        this.inputs.forEach(input => {
            body.appendChild(input.createDomElement());
        });
        return menu;
    }
}
export default Menu;
//# sourceMappingURL=Menu.js.map