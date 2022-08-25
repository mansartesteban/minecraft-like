import { _LocalObserver, _Observer } from "@/@types"

class Observer implements _Observer {

    observers: _LocalObserver[]

    constructor() {
        this.observers = []
    }

    $on(event: string, callback: Function): this {

        this.isValidEvent(event)

        this.observers.push({
            event,
            callback
        })

        return this
    }

    unset(observer: _LocalObserver): this {
        this.observers = this.observers.filter(
            function (item) {
                if (item !== observer) {
                    return item
                }
            }
        )
        return this
    }

    $emit(event: string, ...args: any[]): this {
        this.observers
            .filter((observer: _LocalObserver) => observer.event === event)
            .forEach(observer => {
                observer.callback(...args)
            })
        return this
    }

    isValidEvent(event: string) {
        const C = class C {static events: {}}
        let constructorClass = this["constructor"] as typeof C

        if (!Object.values(constructorClass.events).includes(event))
            throw new Error(`Event '${event}' is not a valid event`)
    }
}

export default Observer