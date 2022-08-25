import { _Options } from "@/@types"

class Input {

    options: _Options
    callback: Function|undefined
    value: any

    constructor(options: _Options, callback?: Function) {

        this.options = options

        if (callback)
            this.callback = callback

        this.value = null
    }

    createDomElement(child?: HTMLElement): HTMLElement {
        if (child) {
            child.classList.add("gui-input")
            return child
        }

        return document.createElement("div")
    }

}

export default Input