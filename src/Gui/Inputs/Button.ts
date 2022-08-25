import { _Options } from "@/@types";
import Input from "../Input";

class Button extends Input {

    label: string

    constructor(options: _Options, callback?: Function) {

        super(options, callback)

        this.label = options.label || ""
    }

    createDomElement(): HTMLElement {
        let button = document.createElement("div")
            button.classList.add("gui-button")
            button.innerText = this.label
            button.addEventListener("click", (event) => {
                if (this.callback !== undefined) {
                    this.callback(event)
                }
            })

        return super.createDomElement(button)

    }


}

export default Button