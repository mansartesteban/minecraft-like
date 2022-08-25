import {Texture, TextureLoader, Vector2} from "three";
import TextureManagerObserver from "@/Observers/TextureManagerObserver";

// type _Sprite = {name: string, texture: Texture}
//
// class TextureManager {
//
//     sprites: _Sprite[]
//     tileSize: number = 16
//
//     constructor() {
//         this.sprites = []
//     }
//
//     loadSprite(path: string, spriteName: string) {
//         let spriteFound = this.sprites.find(sprite => sprite.name === spriteName) as _Sprite
//         if (!spriteFound) {
//             const texture = new TextureLoader().load( "assets/" + path)
//             const sprite = {
//                 name: spriteName,
//                 texture: texture
//             }
//             this.sprites.push(sprite)
//         }
//     }
//
//     getTexture(spriteName: string, position: Vector2) {
//         let spriteFound = this.sprites.find(sprite => sprite.name === spriteName) as _Sprite
//         if (spriteFound) {
//             return this.cutTexture(spriteFound, position)
//         }
//     }
//
//     cutTexture(sprite: _Sprite, position: Vector2) {
//
//     }
//
// }
//
// export default TextureManager

type _Texture = {name: string, texture: Texture}

class TextureManager {

    textures: _Texture[] = []
    observer: TextureManagerObserver


    constructor() {
        this.observer = new TextureManagerObserver()
    }

    getTexture(textureName: string, path: string): Texture {
        let textureFound = this.textures.find(texture => texture.name === textureName)
        if (textureFound) {
            return textureFound.texture
        } else {
            const texture = new TextureLoader().load(path)
            this.textures.push({
                name: textureName,
                texture: texture
            })
            console.log("texture?", texture)
            this.observer.$emit(TextureManagerObserver.events.LOADED, {textureName})
            return texture
        }
    }

}

export default TextureManager