import Menu from "@/Gui/Menu";
import Game from "@/Game/Game";

class Gui {

    game: Game
    menus: Menu[]
    navigation: Menu[]
    gameOverlay: HTMLElement | null

    constructor(game: Game) {
        this.game = game

        this.menus = []

        this.navigation = []

        let domElement = document.getElementById("game-overlay")
        this.gameOverlay = domElement
    }


    next(menu: string) {
        this.show(menu)
    }

    // Implémenters un count : .back(3) pour revenir 3 fois en arrière
    back() {
        this.navigation.pop()
        let lastMenu = this.navigation.pop()

        if (lastMenu)
            this.show(lastMenu.getName())
    }

    show(menu: string) {
        if (this.gameOverlay) {
            this.gameOverlay.classList.add("visible")
            // this.game.controls.unlock(ControlsManager.TAB)

            if (menu) {

                let menusOpened = document.getElementsByClassName("gui-menu")
                if (menusOpened) {
                    for (let childMenu of menusOpened) {
                        this.gameOverlay.removeChild(childMenu)
                    }
                }

                let menuFound = this.menus.find(m => m.getName() === menu)

                if (menuFound) {
                    this.gameOverlay.appendChild(menuFound.createDomElement())
                    this.navigation.push(menuFound)
                }
            }
        }
    }

    hide() {
        if (this.gameOverlay) {
            this.gameOverlay.style.display = "none"
        }
    }

    addMenu(menu: Menu) {
        if (menu === null)
            return

        this.menus.push(menu)
    }

}

export default Gui