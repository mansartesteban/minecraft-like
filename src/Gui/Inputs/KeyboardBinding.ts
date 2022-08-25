import { _Options } from "@/@types";
import Input from "../Input";

class KeyboardBinding extends Input {

    label: string

    constructor(options: _Options, callback?: Function) {
        super(options, callback)

        this.label = options.label || ""
    }

    createDomElement(): HTMLElement {
        let input = document.createElement("div")
            input.classList.add("gui-keyboard-binding")

        let label = document.createElement("div")
            label.classList.add("label")
            label.innerText = this.label

        let value = document.createElement("div")
            value.classList.add("value")
            value.innerText = this.options.value


        input.appendChild(label)
        input.appendChild(value)

        return super.createDomElement();
    }
}

export default  KeyboardBinding