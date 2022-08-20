import SeedRandom from "seedrandom";
import InputsDefinitions from "@/Gui/InputsDefinitions";
import GuiMenu from "@/Gui/Menu";
import Gui from "@/Gui/Gui";
class Game {
    constructor() {
    }
    startLauncher() {
        let mainMenu = new GuiMenu("main-menu");
        mainMenu.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Nouveau monde"
        }, () => {
            let r = SeedRandom("I'm a seed !")();
            console.log(r);
        });
        mainMenu.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Charger un monde"
        });
        mainMenu.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Multijoueurs"
        });
        mainMenu.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Options"
        });
        mainMenu.addInput({
            type: InputsDefinitions.TYPE.BUTTON,
            label: "Quitter"
        });
        let gui = new Gui();
        gui.addMenu(mainMenu);
        gui.show(mainMenu);
    }
}
export default Game;
//# sourceMappingURL=Game.js.map