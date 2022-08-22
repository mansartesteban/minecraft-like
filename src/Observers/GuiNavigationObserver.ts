import Observer from "@/Observers/Observer";

class GuiNavigationObserver extends Observer {

    static events = {
        NEXT: "NEXT",
        PREV: "PREV"
    }

    constructor() {
        super();
    }

}

export default GuiNavigationObserver