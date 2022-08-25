import Scene from "@/Game/Scene"
import {
    Scene as TScene,
    WebGLRenderer,
    PerspectiveCamera,
    BoxGeometry,
    Mesh,
    MeshBasicMaterial,
    TextureLoader,
    NearestFilter,
    PointLight,
    MeshPhongMaterial,
    MeshStandardMaterial,
    Light,
    SphereGeometry,
    IcosahedronGeometry,
    PlaneGeometry,
    Vector3,
    Object3D,
    Quaternion,
    Vector2, AmbientLight, RingGeometry, SpriteMaterial,

} from "three"
import {Geometry} from "three/examples/jsm/deprecated/Geometry";
import World from "@/Game/World";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import MathUtils from "@/Utils/MathUtils";
import {EXRLoader} from "three/examples/jsm/loaders/EXRLoader";
import SpriteMapper from "@/Utils/SpriteMapper";
import Bloc from "../Actors/Bloc";
import Game from "../Game";
import BlocGrass from "@/Game/Actors/Blocs/BlocGrass";
import TextureManager from "@/Game/TextureManager";
import TextureManagerObserver from "@/Observers/TextureManagerObserver";
import BlocStateObserver from "@/Observers/BlocStateObserver";
import { _WorldOptions } from "@/@types";

class OverworldScene extends Scene {

    world: World
    camera: PerspectiveCamera|null = null
    scene: TScene|null = null
    renderer: WebGLRenderer|null = null
    cube: Mesh|undefined
    light: Light|undefined
    i: number = 0
    game: Game

    constructor({game, worldOptions}: { game: Game, worldOptions: _WorldOptions }) {
        super()
        this.game = game
        this.world = new World(worldOptions)

        this.init()
        this.loop()
    }

    async init() {

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

        let $this = this
        let textures = [
            new TextureLoader().load( "assets/Textures/Blocs/dirt2.png"),
        ]
        new TextureLoader().load( "assets/Textures/blocs.png", function(texture) {
            // let Material = {
            //     map: texture,
            //     // aoMap: new TextureLoader().load( "assets/Textures/Blocs/brick-ao.png"),
            //     // normalMap: new TextureLoader().load( "assets/Textures/Blocs/brick-normal.png"),
            //     // roughnessMap: new TextureLoader().load( "assets/Textures/Blocs/brick-roughness.png"),
            //     // displacementMap: new TextureLoader().load( "assets/Textures/Blocs/brick-height.png"),
            //     displacementScale: 0
            // }
            let Material = {
                // envMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-base.png"),
                map: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-base.png"),
                aoMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-ao.png"),
                normalMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-normal.png"),
                roughnessMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-roughness.png"),
                // emissiveMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-emissive.png"),
                displacementMap: new TextureLoader().load( "assets/Textures/Blocs/Grass/grass-height.png"),
                displacementScale: .33
            }



            let textureSize = 16
            let spriteMapper = new SpriteMapper(Material.map, 10, 10)
                spriteMapper.assign(0, 1)
                spriteMapper.move(2, 0)

            let texture2 = texture.clone()
            let spriteMapper2 = new SpriteMapper(texture2, 10, 10)
                spriteMapper2.assign(0, 2)




            let cubeMaterialArray = []

            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture } ) );
            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture } ) );
            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture } ) );
            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture } ) );
            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture2 } ) );
            cubeMaterialArray.push( new MeshStandardMaterial( { map: texture } ) );
            // cubeMaterialArray.push( new SpriteMaterial( { map: texture } ) );
            // cubeMaterialArray.push( new SpriteMaterial( { map: texture } ) );
            // cubeMaterialArray.push( new SpriteMaterial( { map: texture } ) );
            // cubeMaterialArray.push( new SpriteMaterial( { map: texture } ) );
            // cubeMaterialArray.push( new SpriteMaterial( { map: texture } ) );

            let mat = cubeMaterialArray

            // Material.aoMap.repeat = new Vector2(10, 10)
            // Material.normalMap.repeat = new Vector2(10, 10)
            // Material.roughnessMap.repeat = new Vector2(10, 10)
            // Material.displacementMap.repeat = new Vector2(10, 10)

            Material.map.magFilter = NearestFilter
            texture2.magFilter = NearestFilter
            // Material.aoMap.magFilter = NearestFilter
            // Material.normalMap.magFilter = NearestFilter
            // Material.roughnessMap.magFilter = NearestFilter
            // Material.displacementMap.magFilter = NearestFilter
            // let mat = new MeshStandardMaterial(cubeMaterials)
            // textures.forEach(t => {
            //     t.magFilter = NearestFilter
            // })
            // let cubeGeometry = new RingGeometry(10, 10, 10, 512)
            // let cubeGeometry = new IcosahedronGeometry(10, 100)
            // let cubeGeometry = new PlaneGeometry(10, 10, 512, 512)
            let cubeGeometry = new BoxGeometry(10, 10, 10, 512)
            // let cubeMaterial = new MeshBasicMaterial({color: "red"})
            // let cubeMaterial = new MeshBasicMaterial({color: "red"})
            let offset = 10
            let c = 5
            for (let i = 0 ; i < c ; i++) {
                for (let j = 0 ; j < c ; j++) {

                    // let cubeMaterial = new MeshBasicMaterial({map: MathUtils.pickRandom(textures)})
                    // let cubeMaterial = new MeshPhongMaterial({color: "red"})
                    let cubeMaterial = mat
                    $this.cube = new Mesh(cubeGeometry, cubeMaterial)
                    $this.cube.position.set(i*10 + offset * i, 0, j * 10 + offset * j)
                    $this.cube.lookAt(i*10 + offset * i, 1500, j*10 + offset * j)

                    // let bloc = new BlocGrass()
                    //     bloc.position.set(i * (10 + offset), 0, j * (10 + offset))


                    if ($this.scene)
                        $this.scene.add($this.cube)
                }
            }

            let cubeMaterial = mat
            $this.cube = new Mesh(cubeGeometry, cubeMaterial)
            $this.cube.position.set(0, 0, 0)
            $this.cube.lookAt(0, 1, 0)
            if ($this.scene)
                $this.scene.add($this.cube)

            $this.light = new PointLight(0xFFFFFF, 1, 10000)
            $this.light.position.set(-1000, 500, 0)
            if ($this.scene)
                $this.scene.add($this.light)

            let sun = new Mesh(new SphereGeometry(10, 100), new MeshBasicMaterial({color: 0xffffff}))
            $this.light.add(sun)



            let ambiantLight = new AmbientLight("white", 1)
            if ($this.scene)
                $this.scene.add(ambiantLight)

        })

        // let mapSize = new Vector2(50, 50)
        // let gap = 0.1
        // let blocSize = new Vector3(1, 1, 1)
        //
        // for (let i = 0 ; i < mapSize.x ; i++) {
        //     for (let j = 0 ; j < mapSize.y ; j++) {
        //
        //         let grassBloc = new BlocGrass({size: blocSize})
        //             grassBloc.position.set((gap + blocSize.x) * i, 0, (gap + blocSize.z) * j)
        //             grassBloc.observer.$on(BlocStateObserver.events.init, () => {
        //                 if ($this.scene) {
        //                     // if (eventDatas.textureName === BlocGrass.BLOC_NAME)
        //                         $this.scene.add(grassBloc.getMesh())
        //                 }
        //             })
                // window.textureManager.observer.$on(TextureManagerObserver.events.LOADED, (eventDatas: any) => {
                //     // console.log(grassBloc.texture)
                //     if ($this.scene) {
                //         if (eventDatas.textureName === BlocGrass.BLOC_NAME)
                //             $this.scene.add(grassBloc.getMesh())
                //     }
                // })


        //     }
        // }


    }

    rotateAroundAxis(object: Object3D, point: Vector3, axis: Vector3, angle: number = 0){

        if (!(object instanceof Object3D)) {
            throw new Error ("Argument 'object' must be an instance of THREE.Object3D")
        }

        let q = new Quaternion()
        q.setFromAxisAngle(axis, angle)

        object.applyQuaternion(q)
        object.position.sub(point)
        object.position.applyQuaternion(q)
        object.position.add(point)

    }

    update() {

        // this.i++
        // if (this.light && this.cube ) {

            // let rotateAround = new Vector3(1, 0, 0)
            // let rotateAround = new Vector3(0, 1, 0)
            //
            // rotateAround = rotateAround.normalize()
            // this.rotateAroundAxis(this.light, new Vector3(), rotateAround, .01)

            // this.light.position.x    = Math.cos(this.i / 100) * 100
            // this.light.position.z = Math.cos(this.i / 100) * 100
            // this.cube.rotation.x = Math.cos(this.i / 100) / 10
            // this.cube.rotation.z = Math.cos(this.i / 100) / 10
        // }

        if (this.renderer && this.scene && this.camera)
            this.renderer.render(this.scene, this.camera)

        super.update()
    }

}

export default OverworldScene