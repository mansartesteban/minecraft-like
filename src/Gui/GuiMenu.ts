import Input from "./Input"
import InputsDefinitions from "./InputsDefinitions"
import {_Menu} from "@/@types/menus"
import GuiNavigationObserver from "@/Observers/GuiNavigationObserver"
import { v4 as uuid } from "uuid"
import SceneObserver from "@/Observers/SceneObserver";
import {_GuiDatas, _NavigatorItem, _Options } from "@/@types"

class GuiMenu implements _Menu, _NavigatorItem {

    name: string
    uuid: string
    title: string | undefined
    inputs: Input[]
    navigationObserver: GuiNavigationObserver
    sceneObserver: SceneObserver
    backButtonCreated: boolean = false
    guiDatas: _GuiDatas

    constructor(name: string = "", title?: string) {
        this.uuid = uuid()

        this.name = name

        if (title)
            this.title = title

        this.inputs = []
        this.navigationObserver = new GuiNavigationObserver()
        this.sceneObserver = new SceneObserver()
        this.guiDatas = {}
    }

    addInput(options: _Options, callback?: (value: any) => void): this {
        if (!options.type || !InputsDefinitions.isValidType(options.type))
            throw new Error("Please provide a valid input type")

        let dynamicClass = InputsDefinitions.TYPE_CLASSES[options.type]
        let dynamicInput = new dynamicClass(options, callback)
        this.inputs.push(dynamicInput)
        return this
    }

    collectDatas(): _GuiDatas {
        return this.guiDatas
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

        if (!this.backButtonCreated) {
            this.addInput({
                type: InputsDefinitions.TYPE.BUTTON,
                label: "Retour",
                bottom: true
            }, () => {
                this.navigationObserver.$emit(GuiNavigationObserver.events.PREV)
            })
            this.backButtonCreated = true
        }

        this.inputs.forEach(input => {
            body.appendChild(input.createDomElement())
        })

        return menu
    }

}

export default GuiMenu
