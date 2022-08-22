import { v4 as uuid } from "uuid"
import World from "@/Game/World"
import Stats from 'three/examples/jsm/libs/stats.module'


class Scene implements _NavigatorItem {

    uuid: string
    name: string
    stats: Function

    constructor(name: string = "") {
        this.uuid = uuid()
        this.name = name
        // @ts-ignore
        this.stats = Stats()
        // @ts-ignore
        document.body.appendChild(this.stats.dom)
    }

    loop() {
        if (window.requestAnimationFrame !== undefined) {
            if (this.update) {
                this.update()
            }
            window.requestAnimationFrame(this.loop.bind(this))
        }
    }

    update() {
        console.log("update ?")
        // @ts-ignore
        this.stats.update()
    }

}

export default Scene