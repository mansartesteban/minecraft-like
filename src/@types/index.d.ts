type _Options = {
    type: string,
    value?: any,
    label?: string,
    bottom?: boolean
}

type _BlocParameters = {
    size: any
}


interface _Observer {
    observers: _LocalObserver[],

    $on(event: string, observer: Function): this,

    $emit(event: string, ...arg: any[]): this,

    unset(observer: _LocalObserver): this,
}

// interface Scene {
//     // camera: Camera
// }

type _LocalObserver = {
    event: string,
    callback: Function
}

type _WorldOptions = {
    name: string,
    seed: string,
    type: string
}

type _GuiDatas = { [key: string]: any }


interface _Navigable {
    navigator: import("@/Utils/ListNavigation").default,

    add(item: _NavigatorItem): this,

    remove(item: _NavigatorItem): this,

    next(item: _NavigatorItem): this,

    prev(count: number): this

    to(name: string): this,

    findByName(name: string): _NavigatorItem | undefined
}

interface _NavigatorItem {
    uuid: string,
    name: string
}

interface _NavigatorList {
    list: _NavigatorItem[],
    cursor: number[],

    next(item: _NavigatorItem): this,

    prev(count: number): this,

    to(name: string): this,

    addItem(item: _NavigatorItem): this,

    removeItem(item: _NavigatorItem): this,

    insertAt(item: _NavigatorItem, index: number): this,

    removeAt(index: number): this,

    getCurrent(): _NavigatorItem,

    getCurrentIndex(): number,

    findByName(name: string): _NavigatorItem | undefined,
}

export {
    _Options,
    _BlocParameters,
    _Observer,
    _LocalObserver,
    _WorldOptions,
    _GuiDatas,
    _Navigable,
    _NavigatorItem,
    _NavigatorList
}