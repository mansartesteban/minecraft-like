import Menu from "@/Gui/Menu";
import InputsDefinitions from "@/Gui/InputsDefinitions";
import AbstractMenu from "@/Gui/AbstractMenu";

class WorldCreationMenu extends AbstractMenu {
    // constructor() {
    //     this.options = {
    //         name: "Nouveau monde",
    //         seed: 0,
    //         type: "normal"
    //     }
    // }

    createDom() {
        let menu = new Menu("world-creation", "Nouveau monde")

        menu.addInput(
            {
                type: InputsDefinitions.TYPE.TEXT_FIELD
            }, (value) => {
                this.options.name = value
            }
        )
    }
}

export default WorldCreationMenu