import { _Options } from "@/@types";
import Input from "@/Gui/Input";

class TextField extends Input {

    label: string

    constructor(options: _Options, callback?: Function) {
        super(options, callback)

        this.label = options.label || ""
    }

    createDomElement(): HTMLElement {

        let textField = document.createElement("input")

        textField.type = "text"
        textField.classList.add("gui-text-field")
        textField.setAttribute("spellcheck", "false")
        textField.placeholder = this.label
        textField.addEventListener("input", (event) => {
            if (this.callback !== undefined) {
                this.callback(textField.value)
            }
        })

        return super.createDomElement(textField)
    }

}

export default TextField