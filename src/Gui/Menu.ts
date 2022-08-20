import Input from "./Input"
import InputsDefinitions from "./InputsDefinitions"

class Menu {

    name: string
    title: string
    inputs: Input[]

    constructor(name = "", title = "") {
        this.name = name
        this.title = title

        this.inputs = []
    }

    getName() {
        return this.name
    }

    addInput(options: _Options, callback?: Function): this {
        if (!options.type || !InputsDefinitions.isValidType(options.type))
            throw new Error("Please provide a valid input type")

        let dynamicClass = InputsDefinitions.TYPE_CLASSES[options.type]
        let dynamicInput = new dynamicClass(options, callback)
        this.inputs.push(dynamicInput)
        return this
    }

    createDomElement() {
        let menu = document.createElement("div")
            menu.classList.add("gui-menu")

        let header = document.createElement("div")
            header.classList.add("gui-menu-header")
            header.innerText = this.title

        let body = document.createElement("div")
            body.classList.add("gui-menu-body")

        menu.appendChild(header)
        menu.appendChild(body)

        this.inputs.forEach(input => {
            console.log("here?", input.createDomElement())
            body.appendChild(input.createDomElement())
        })

        return menu
    }


}

export default Menu