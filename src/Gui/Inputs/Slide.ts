import { _Options } from "@/@types";
import Input from "@/Gui/Input";

class Slide extends Input {

    label: string

    constructor(options: _Options, callback?: Function) {
        super(options, callback)

        this.label = options.label || ""
    }
}

export default Slide