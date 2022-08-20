import SeedRandom from "seedrandom"

import InputsDefinitions from "@/Gui/InputsDefinitions"
import Gui from "@/Gui/Gui"
import MainMenu from "@/Game/Menus/Main";
import WorldCreationMenu from "@/Game/Menus/WorldCreation";

class Game {
    constructor() {
    }

    startLauncher() {

        let mainMenu = new MainMenu()
        let worldCreationMenu = new WorldCreationMenu()

        let gui = new Gui(this)
            gui.addMenu(mainMenu)
            gui.addMenu(worldCreationMenu)
            gui.show(worldCreationMenu.name)
    }

    // createWorld() {
    //     let world = new World()
    //
    // }

}

export default Game
