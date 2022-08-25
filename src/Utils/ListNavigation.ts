import {_NavigatorItem, _NavigatorList } from "@/@types"

class ListNavigation implements _NavigatorList {

    list: _NavigatorItem[]
    cursor: number[] = [0]

    constructor() {
        this.list = []
    }

    next(item: _NavigatorItem): this {
        let itemFoundIndex = this.list.findIndex((i: _NavigatorItem) => i.uuid === item.uuid)
        if (itemFoundIndex !== -1) {
            this.cursor.push(itemFoundIndex)
        }
        return this
    }

    prev(count: number = 1): this {
        if (count > 0 && this.cursor.length > 1) {
            this.cursor = this.cursor.slice(0, -count)
        }
        return this
    }

    to(name: string) {
        let to = this.findByName(name)
        if (to) {
            this.next(to)
        }
        return this
    }

    addItem(item: _NavigatorItem): this {
        this.list.push(item)
        return this
    }

    removeItem(item: _NavigatorItem): this {
        let foundItemIndex = this.list.findIndex((i: _NavigatorItem) => i.uuid === item.uuid)
        if (foundItemIndex !== -1)
            this.removeAt(foundItemIndex)
        return this
    }

    insertAt(item: _NavigatorItem, index: number): this {
        this.list.splice(index, 0, item)
        return this
    }
    removeAt(index: number): this {
        this.list.splice(index, 1)
        return this
    }

    getCurrent(): _NavigatorItem {
        let current = this.cursor[this.cursor.length - 1]
        return this.list[current]
    }

    findByName(name: string) {
        return this.list.find((item: _NavigatorItem) => item.name === name)
    }

    getCurrentIndex(): number {
        return this.cursor[this.cursor.length - 1]
    }

}

export default ListNavigation