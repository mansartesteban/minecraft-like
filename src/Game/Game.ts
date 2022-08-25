import Gui from "@/Gui/Gui"
import MainMenu from "@/Game/Menus/Main";
import WorldCreationMenu from "@/Game/Menus/WorldCreation";
import SceneManager from "@/Game/SceneManager";
import SceneObserver from "@/Observers/SceneObserver";
import Scene from "@/Game/Scene";
import World from "./World";
import OverworldScene from "@/Game/Scenes/OverworldScene";
import TextureManager from "@/Game/TextureManager";

declare global {
    interface Window {
        textureManager: TextureManager
    }
}


class Game {

    sceneManager: SceneManager

    constructor() {
        // todo : Bind controls

        this.sceneManager = new SceneManager(this)
        window.textureManager = new TextureManager()

    }

    startLauncher() {

        let scene = new OverworldScene({game: this, worldOptions: {name: "toto", type: "toto", seed: "toto"}})
        this.sceneManager.next(scene)
        // // // Todo : écran de bienvenue
        // let mainMenu = new MainMenu()
        // let worldCreationMenu = new WorldCreationMenu()
        //
        //
        // let gui = new Gui(this)
        //     gui.add(mainMenu)
        //     gui.add(worldCreationMenu)
        //     gui.next(mainMenu)

        //
        // worldCreationMenu.sceneObserver.$on(SceneObserver.events.NEW_WORLD, (observerDatas: _WorldOptions) => {
        //     gui.leave()
        //     // Todo : Ajouter un screen de chargement
        //     //  scene.onProgress()
        //     let scene = new OverworldScene(observerDatas)
        //     this.sceneManager.next(scene)
        //
        // })

    }

}

export default Game
