import "@assets/Styles/reset.scss"
import "@assets/Styles/fonts.scss"
import "@assets/Styles/minecraft.scss"
import "@assets/Styles/gui.scss"

// @ts-ignore
import Game from "@/Game/Game"

const game = new Game()
    game.startLauncher()



/*
    Todo :
        - Ajouter une class 'Actor' (personnage, véhicule, objet ...)
 */