import GuiMenu from "../Gui/GuiMenu";

interface _Menu {
    name: string,
    createDomElement: () => HTMLElement
}

export {
    _Menu
}