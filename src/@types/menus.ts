import GuiMenu from "../Gui/GuiMenu";

interface _Menu {
    name: string,
    guiDatas: { [key: string]: any }
    createDomElement: () => HTMLElement
}

export {
    _Menu
}