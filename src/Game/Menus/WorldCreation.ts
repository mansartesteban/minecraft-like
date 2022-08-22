import GuiMenu from "@/Gui/GuiMenu"
import InputsDefinitions from "@/Gui/InputsDefinitions"
import SceneObserver from "@/Observers/SceneObserver"

class WorldCreationMenu extends GuiMenu {

    guiDatas: _WorldOptions

    constructor() {
        super("world-creation")
        this.guiDatas = {
            name: "Nouveau monde",
            seed: "1051364648521748",
            type: "normal"
        }

        this.createInputs()
    }

    createInputs(): void {
        // Todo : Ajouter un truc pour différencier les inputs textfield, une icône ?
        // Todo : Chercher une autre police qui gère les accents, ou à défaut créer un classes helper qui transforme les accents
        this.addInput(
            {
                type: InputsDefinitions.TYPE.TEXT_FIELD,
                label: "Entrez le nom du monde ...."
            }, (value) => {
                this.guiDatas.name = value
            }
        )

        this.addInput(
            {
                type: InputsDefinitions.TYPE.BUTTON,
                label: "Creer"
            }, () => {
                this.sceneObserver.$emit(SceneObserver.events.NEW_WORLD, this.collectDatas())
            }
        )

    }

}

export default WorldCreationMenu