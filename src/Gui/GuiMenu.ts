import Input from "./Input"
import InputsDefinitions from "./InputsDefinitions"
import {_Menu} from "@/@types/menus";
import Navigation from "@/Gui/Navigation";

class GuiMenu implements _Menu {

    name: string
    title: string | undefined
    inputs: Input[]
    navigation: Navigation

    constructor(name: string = "", title?: string) {
        this.name = name

        if (title)
            this.title = title

        this.inputs = []
        this.navigation = new Navigation()
    }

    getName() {
        return this.name
    }

    addInput(options: _Options, callback?: (value: any) => void): this {
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
        if (this.title)
            header.innerText = this.title

        let body = document.createElement("div")
            body.classList.add("gui-menu-body")

        menu.appendChild(header)
        menu.appendChild(body)

        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Retour",
            bottom: true
        }, () => {
            this.navigation.$emit("back")
        })

        this.inputs.forEach(input => {
            body.appendChild(input.createDomElement())
        })



        return menu
    }

}

export default GuiMenu
