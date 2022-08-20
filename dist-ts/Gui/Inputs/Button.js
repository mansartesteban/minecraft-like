import Input from "../Input";
class Button extends Input {
    constructor(options, callback) {
        super(options, callback);
        this.label = options.label || "";
    }
    createDomElement() {
        let button = document.createElement("div");
        button.classList.add("gui-button");
        button.innerText = this.label;
        if (this.callback) {
            button.addEventListener("click", (event) => {
                this.callback(event);
            });
        }
        return super.createDomElement(button);
    }
}
export default Button;
//# sourceMappingURL=Button.js.map