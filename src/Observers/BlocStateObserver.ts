import Observer from "@/Observers/Observer";

class BlocStateObserver extends Observer {

    static events = {
        init: "initialized"
    }

    constructor() {
        super();
    }
}

export default BlocStateObserver