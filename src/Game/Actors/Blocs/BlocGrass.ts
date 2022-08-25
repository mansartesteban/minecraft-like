import Bloc from "@/Game/Actors/Bloc";
import {fsReadFile} from "ts-loader/dist/utils";
import path from "path"
import * as fs from "fs";
import {Mesh, Texture, Vector3} from "three";
import Observer from "@/Observers/Observer";
import observer from "@/Observers/Observer";
import BlocStateObserver from "@/Observers/BlocStateObserver";
import {_BlocParameters} from "@/@types";

type _BlocMetadatas = {
    texture: {
        path: string
    }
}



// Todo :
//      Ne plus instancier bloc par bloc mais créer une usine à instance
//      Objectif, ne pas rappeler le fichier de metadatas 100 fois
//      BlocFactory::create("grass")
class BlocGrass extends Bloc {

    static BLOC_NAME: string = "grass"

    isMetadatasLoaded: boolean = false
    observer: Observer


    metadatas: _BlocMetadatas|undefined

    constructor(parameters: _BlocParameters) {
        super();

        this.parameters = parameters

        this.observer = new BlocStateObserver()
        // Récupère les metadatas du bloc avant de charger les textures
        this.getMetadatas(BlocGrass.BLOC_NAME).then(metadatas => {
            this.metadatas = metadatas
            this.isMetadatasLoaded = true
            this.init()
            this.observer.$emit(BlocStateObserver.events.init)
        })

    }

    init(): void {

        // Vérifie l'existence de la classe globale de gestion des textures
        if (window.textureManager) {
            if (this.metadatas) {
                this.texture = window.textureManager.getTexture(BlocGrass.BLOC_NAME, this.metadatas.texture.path)
            }
        }
    }

    async getMetadatas(filename: string): Promise<_BlocMetadatas> {

        // Lance une requête sur le fichier metadata du bloc
        return fetch("/Assets/Metadatas/Blocs/" + filename + ".json").then(async file => {
            return await file.json()
        })
    }

}

export default BlocGrass