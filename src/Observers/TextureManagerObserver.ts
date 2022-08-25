import Observer from "@/Observers/Observer";

class GuiNavigationObserver extends Observer {

    static events = {
        LOADED: "LOADED"
    }

    constructor() {
        super();
    }

}

export default GuiNavigationObserver