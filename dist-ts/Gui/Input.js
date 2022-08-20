class Input {
    constructor(options, callback) {
        this.options = options;
        this.callback = callback;
        this.value = null;
    }
    createDomElement(input) {
        input.classList.add("gui-input");
        if (this.options.bottom) {
            input.classList.add("stick-to-bottom");
        }
        return input;
    }
}
export default Input;
//# sourceMappingURL=Input.js.map