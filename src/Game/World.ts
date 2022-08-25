import { _WorldOptions } from "@/@types"

class World {

    options: _WorldOptions

    constructor(options: _WorldOptions) {
        const defaultOptions = {
            type: "normal",
            difficulty: "normal",
            seed: ""
        }

        this.options = {...defaultOptions, ...options}
    }

    create(options: _WorldOptions) {
        /*
            TODO :
                - Créer une map
                    - Décider de la zone à construire
                    - Créer les biomes
                    - Créer les arbres
                    - Créer l'eau
                    - Créer des chunks
                        - Ajouter les blocs
                            - Créer le modèle
                            - Récupérer les textures
                            - Placer les blocks dans les chunks
                - Ajouter les mobs
                    - Récupérer les modèles
                    - Récupérer les textures
                    - Positionner les mobs en groupes selon le type
                - Ajouter le joueur
                    - Récupérer le modèle
                    - Récupérer les textures
                    - Créer la caméra
                - Lancer la scene

        */
    }
}

export default World