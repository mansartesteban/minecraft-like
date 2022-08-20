import Input from "../Input";
class KeyboardBinding extends Input {
    constructor(options, callback) {
        super(options, callback);
        this.label = options.label || "";
        this.domElement = this.createDomElement();
    }
    createDomElement() {
        let input = document.createElement("div");
        input.classList.add("gui-keyboard-binding");
        let label = document.createElement("div");
        label.classList.add("label");
        label.innerText = this.label;
        let value = document.createElement("div");
        // KeyboardBinding.findIcon(InputsDefinitions.SHIFT)
        value.classList.add("value");
        value.innerText = this.options.value;
        input.appendChild(label);
        input.appendChild(value);
        return super.createDomElement(input);
    }
}
export default KeyboardBinding;
//# sourceMappingURL=KeyboardBinding.js.map