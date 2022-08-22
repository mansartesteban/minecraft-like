import GuiMenu from "@/Gui/GuiMenu";
import Game from "@/Game/Game";
import ListNavigation from "@/Utils/ListNavigation";
import GuiNavigationObserver from "@/Observers/GuiNavigationObserver";

class Gui implements _Navigable {

    game: Game
    navigator: ListNavigation
    gameOverlay: HTMLElement | null

    constructor(game: Game) {
        this.game = game
        this.navigator = new ListNavigation()
        this.gameOverlay = document.getElementById("game-overlay")
    }

    add(menu: GuiMenu): this {
        if (menu === null)
            return this

        this.navigator.addItem(menu)

        menu.navigationObserver.$on(GuiNavigationObserver.events.NEXT, (menuName: string) => {
            this.to(menuName)
        })
        menu.navigationObserver.$on(GuiNavigationObserver.events.PREV, () => {
            this.prev()
        })

        return this
    }

    remove(menu: GuiMenu): this {
        this.navigator.removeItem(menu)
        return this
    }

    next(menu: GuiMenu): this {
        this.navigator.next(menu)
        this.show()
        return this
    }

    to(menuName: string): this {
        this.navigator.to(menuName)
        this.show()
        return this
    }

    prev(count: number = 1): this {
        this.navigator.prev(count)
        this.show()
        return this
    }

    findByName(name: string): _NavigatorItem | undefined {
        return this.navigator.findByName(name)
    }

    leave() {
        this.gameOverlay?.replaceChildren()
        this.hide()
    }

    show() {

        let menu = this.navigator.getCurrent() as GuiMenu

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

                this.gameOverlay.appendChild(menu.createDomElement())
            }
        }
    }

    hide() {
        if (this.gameOverlay) {
            this.gameOverlay.classList.remove("visible")
        }
    }


    collectDatas(menu: GuiMenu): _GuiDatas|null {
        let menuFound = this.navigator.findByName(menu.name) as GuiMenu
        if (menuFound) {
            return menuFound.collectDatas()
        }
        return null
    }

}

export default Gui