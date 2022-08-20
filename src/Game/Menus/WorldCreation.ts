import GuiMenu from "@/Gui/GuiMenu"
import InputsDefinitions from "@/Gui/InputsDefinitions"

class WorldCreationMenu extends GuiMenu {

    options: {
        name: string,
        seed: string,
        type: string
    }

    constructor() {
        super("world-creation")
        this.options = {
            name: "Nouveau monde",
            seed: "1051364648521748",
            type: "normal"
        }

        this.createInputs()
    }

    createInputs(): void {
        // Todo : Ajouter un truc pour différencier les inputs textfield, un icône ?
        // Todo : Chercher une autre police qui gère les accents, ou à défaut créer un classes helper qui transforme les accents
        this.addInput(
            {
                type: InputsDefinitions.TYPE.TEXT_FIELD,
                label: "Entrez le nom du monde ...."
            }, (value) => {
                this.options.name = value
            }
        )

        this.addInput(
            {
                type: InputsDefinitions.TYPE.BUTTON,
                label: "Créer"
            }, () => {
                console.log("Nnom du monde : ", this.options.name)
            }
        )

    }

}

export default WorldCreationMenu