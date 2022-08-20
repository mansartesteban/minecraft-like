import Button from "./Inputs/Button";
import KeyboardBinding from "./Inputs/KeyboardBinding";
import TextField from "./Inputs/TextField";
import Slide from "./Inputs/Slide";
class InputsDefinitions {
    static getTypes() {
        return Object.values(InputsDefinitions.TYPE);
    }
    static isValidType(type) {
        return this.getTypes().includes(type);
    }
}
InputsDefinitions.TYPE = {
    BUTTON: "button",
    KEYBOARD_BINDING: "keyboardBinding",
    TEXT_FIELD: "textField",
    SLIDE: "slide"
};
InputsDefinitions.TYPE_CLASSES = {
    [InputsDefinitions.TYPE.BUTTON]: Button,
    [InputsDefinitions.TYPE.KEYBOARD_BINDING]: KeyboardBinding,
    [InputsDefinitions.TYPE.TEXT_FIELD]: TextField,
    [InputsDefinitions.TYPE.SLIDE]: Slide,
};
export default InputsDefinitions;
//# sourceMappingURL=InputsDefinitions.js.map