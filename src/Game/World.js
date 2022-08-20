class World {
    constructor(options) {
        const defaultOptions = {
            type: "normal",
            difficulty: "normal",
            seed: ""
        }

        this.options = {...defaultOptions, options}
    }
}

export default World