import Scene from "@/Game/Scene"
import {
    Scene as TScene,
    WebGLRenderer,
    PerspectiveCamera,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    TextureLoader, NearestFilter,

} from "three"
import {Geometry} from "three/examples/jsm/deprecated/Geometry";
import World from "@/Game/World";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import MathUtils from "@/Utils/MathUtils";

class OverworldScene extends Scene {

    world: World
    camera: PerspectiveCamera|null = null
    scene: TScene|null = null
    renderer: WebGLRenderer|null = null
    cube: Mesh|undefined

    constructor(worldOptions: _WorldOptions) {
        super()
        this.world = new World(worldOptions)

        this.init()
        this.loop()
    }

    init() {

        this.renderer = new WebGLRenderer({antialias: true});
        this.renderer.setClearColor(0x000000)
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio ? window.devicePixelRatio : 1);


            // this.renderer.setClearColor(0x202020)
            // this.keepRatio([this.renderer])
        document.body.appendChild(this.renderer.domElement)

        this.scene = new TScene()


        this.camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
        this.camera.position.set(50, 50, 50)
        this.camera.lookAt(0, 0, 0)
        this.scene.add(this.camera);
        new OrbitControls(this.camera, this.renderer.domElement)

        let textures = [
            new TextureLoader().load( "assets/Textures/Blocs/dirt.png"),
            new TextureLoader().load( "assets/Textures/Blocs/dirt2.png"),
            new TextureLoader().load( "assets/Textures/Blocs/dirt3.png"),
        ]
        textures.forEach(t => {
            t.magFilter = NearestFilter
        })
        let cubeGeometry = new BoxGeometry(10, 10, 10)
        // let cubeMaterial = new MeshBasicMaterial({color: "red"})
        for (let i = -20 ; i < 20 ; i++) {
            for (let j = -20 ; j < 20 ; j++) {
                let cubeMaterial = new MeshBasicMaterial({map: MathUtils.pickRandom(textures)})
                this.cube = new Mesh(cubeGeometry, cubeMaterial)
                this.cube.position.set(i*10, 0, j * 10)
                this.scene.add(this.cube)
            }
        }


    }

    update() {

        if (this.cube) {
            // this.cube.position.x += .1
        }
        if (this.renderer && this.scene && this.camera)
            this.renderer.render(this.scene, this.camera)

        super.update()
    }

}

export default OverworldScene