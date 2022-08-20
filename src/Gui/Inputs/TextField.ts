import Input from "@/Gui/Input";

class TextField extends Input {

    label: string

    constructor(options: _Options, callback?: Function) {
        super(options, callback)

        this.label = options.label || ""
    }
}

export default TextField