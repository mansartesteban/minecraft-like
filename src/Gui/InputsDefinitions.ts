import Button from "./Inputs/Button"
import KeyboardBinding from "./Inputs/KeyboardBinding"
import TextField from "./Inputs/TextField"
import Slide from "./Inputs/Slide"

class InputsDefinitions {

    static TYPE = {
        BUTTON: "button",
        KEYBOARD_BINDING: "keyboardBinding",
        TEXT_FIELD: "textField",
        SLIDE: "slide"
    }

    static TYPE_CLASSES = {
        [InputsDefinitions.TYPE.BUTTON]: Button,
        [InputsDefinitions.TYPE.KEYBOARD_BINDING]: KeyboardBinding,
        [InputsDefinitions.TYPE.TEXT_FIELD]: TextField,
        [InputsDefinitions.TYPE.SLIDE]: Slide,
    }

    static getTypes(): string[] {
        return Object.values(InputsDefinitions.TYPE)
    }

    static isValidType(type: string): boolean {
        return this.getTypes().includes(type)
    }
}

export default InputsDefinitions