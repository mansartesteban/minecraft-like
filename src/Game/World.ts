class World {

    options: _WorldOptions

    constructor(options: _WorldOptions) {
        const defaultOptions = {
            type: "normal",
            difficulty: "normal",
            seed: ""
        }

        this.options = {...defaultOptions, ...options}
    }

    create(options: _WorldOptions) {

    }
}

export default World