class Gui {
    constructor(game) {
        this.game = game;
        this.menus = [];
        this.navigation = [];
        let domElement = document.getElementById("game-overlay");
        this.gameOverlay = domElement;
    }
    next(menu) {
        this.show(menu);
    }
    back() {
        this.navigation.pop();
        let lastMenu = this.navigation.pop();
        this.show(lastMenu.getName());
    }
    show(menu) {
        this.gameOverlay.classList.add("visible");
        // this.game.controls.unlock(ControlsManager.TAB)
        if (menu) {
            let menusOpened = document.getElementsByClassName("gui-menu");
            if (menusOpened) {
                for (let childMenu of menusOpened) {
                    this.gameOverlay.removeChild(childMenu);
                }
            }
            if (typeof menu === "string")
                menu = this.menus.find(m => m.getName() === menu);
            if (menu) {
                this.gameOverlay.appendChild(menu.createDomElement());
                this.navigation.push(menu);
            }
        }
    }
    hide() {
        this.gameOverlay.style.display = "none";
        // this.game.controls.lock()
    }
    addMenu(menu = null) {
        if (menu === null)
            return;
        this.menus.push(menu);
    }
}
export default Gui;
//# sourceMappingURL=Gui.js.map