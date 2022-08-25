import {Texture, Vector2} from "three";

class SpriteMapper {

    sprite: Texture
    tilesOnX: number
    tilesOnY: number

    position: Vector2

    constructor(sprite: Texture, tilesOnX: number, tilesOnY: number) {
        this.sprite = sprite
        this.tilesOnX = tilesOnX
        this.tilesOnY = tilesOnY
        this.position = new Vector2()

        this.sprite.repeat.set(1 / tilesOnX, 1 / tilesOnY)

    }

    assign(x: number, y: number): this {
        this.sprite.offset.x = x / this.tilesOnX
        this.sprite.offset.y = (this.tilesOnY - y) / this.tilesOnY

        this.position.set(x, y)

        return this
    }

    move(x: number, y: number): this {
        this.assign(
            (this.position.x + x) % this.tilesOnX,
            (this.position.y + y) % this.tilesOnY,
        )
        return this
    }
}

export default SpriteMapper