import GuiMenu from "@/Gui/GuiMenu";
import Game from "@/Game/Game";

class Gui {

    game: Game
    menus: GuiMenu[]
    navigation: GuiMenu[] // Todo : passer en number avec seulement un pointer sur l'index de menus
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
            this.gameOverlay.classList.remove("visible")
        }
    }

    addMenu(menu: GuiMenu) {
        if (menu === null)
            return

        menu.navigation.$on((action: string, menuName: string) => {
            if (action === "next") {
                this.next(menuName)
            } else if (action === "back") {
                this.back()
            }

        })

        this.menus.push(menu)
    }

}

export default Gui