import GuiMenu from "@/Gui/GuiMenu"
import InputsDefinitions from "@/Gui/InputsDefinitions"
import SeedRandom from "seedrandom"
import GuiNavigationObserver from "@/Observers/GuiNavigationObserver";

class Main extends GuiMenu {

    constructor() {
        super("main-menu")

        this.createInputs()
    }

    createInputs(): void {
        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Nouveau monde"
        }, () => {
            this.navigationObserver.$emit(GuiNavigationObserver.events.NEXT, "world-creation")
        })

        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Charger un monde"
        })

        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Multijoueurs"
        })

        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Options"
        })

        this.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Quitter"
        })
    }

}

export default Main