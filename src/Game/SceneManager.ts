import Scene from "@/Game/Scene"
import ListNavigation from "@/Utils/ListNavigation"
import GuiMenu from "@/Gui/GuiMenu";
import seedrandom from "seedrandom";
import Game from "@/Game/Game";
import { _Navigable } from "@/@types";

class SceneManager implements _Navigable {

    navigator: ListNavigation
    game: Game

    constructor(game: Game) {
        this.game = game
        this.navigator = new ListNavigation()

        this.init()
    }

    init(): void {
        let initialScene = new Scene()

    }

    add(scene: Scene): this {
        this.navigator.addItem(scene)
        return this
    }

    remove(scene: Scene): this {
        this.navigator.removeItem(scene)
        return this
    }

    next(scene: Scene): this {
        this.navigator.next(scene)
        return this
    }

    to(sceneName: string): this {
        let scene = this.findByName(sceneName)
        if (scene) {
            this.next(scene)
        }
        return this
    }

    prev(count: number = 1): this {
        this.navigator.prev(count)
        return this
    }

    findByName(name: string): Scene | undefined {
        return this.navigator.findByName(name) as Scene
    }

}

export default SceneManager