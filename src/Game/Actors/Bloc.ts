import {
    BoxGeometry,
    BufferGeometry,
    Material,
    Mesh,
    MeshBasicMaterial,
    NearestFilter,
    Object3D,
    Texture,
    Vector3
} from "three";
import {Geometry} from "three/examples/jsm/deprecated/Geometry";
import {_BlocParameters} from "@/@types";



class Bloc extends Object3D {

    texture: Texture|undefined
    parameters?: _BlocParameters
    // geometry: BufferGeometry|undefined
    // material: Material|undefined

    constructor() {
        super()
    }

    getMesh(): Object3D {

        if (this.texture)
            this.texture.magFilter = NearestFilter

        let width = this.parameters?.size.x || 10
        let height = this.parameters?.size.y || 10
        let depth = this.parameters?.size.z || 10
        let geometry = new BoxGeometry(width, height, depth, 64, 64)

        let materialParameters = {
            map: this.texture || null,
            color: !this.texture ? "fuchsia" : ""
        }

        let material = new MeshBasicMaterial(materialParameters)
        let mesh = new Mesh(geometry, material)

        mesh.position.set(
            this.position.x,
            this.position.y,
            this.position.z
        )
        return mesh
    }

}

export default Bloc