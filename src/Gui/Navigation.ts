class Navigation implements _Observer {

    observers: Function[]

    constructor() {
        this.observers = []
    }

    $on(observer: Function) {
        this.observers.push(observer)
    }

    unset(observer: Function) {
        this.observers = this.observers.filter(
            function (item) {
                if (item !== observer) {
                    return item
                }
            }
        )
    }

    $emit(action: string, menuName?: string) {
        this.observers.forEach(observer => {
            // observer.navigate(action, menuName)
            observer(action, menuName)
        })
    }
}

export default Navigation