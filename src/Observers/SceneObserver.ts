import Observer from "@/Observers/Observer"

class SceneObserver extends Observer {

    static events = {
        NEW_WORLD: "NEW_WORLD"
    }

    constructor() {
        super();
    }

}

export default SceneObserver