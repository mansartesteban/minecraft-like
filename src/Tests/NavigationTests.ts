// import ListNavigation from "@/Utils/ListNavigation";
// import { v4 as uuid } from "uuid"
//
// class NavTest implements _Navigable {
//
//     items: any[]
//     navigator: ListNavigation
//     uuid: string
//
//     constructor() {
//         this.items = []
//         this.uuid = uuid()
//         this.navigator = new ListNavigation(this.items)
//     }
//
//     addItem(item: _NavigatorItem) {
//         this.items.push(item)
//     }
//
//     removeItem(item: _NavigatorItem) {
//         let foundIndex = this.items.findIndex((i: _NavigatorItem) => {
//             return i.uuid == item.uuid
//         })
//         if (foundIndex !== -1) {
//             this.items.splice(foundIndex, 1)
//         }
//     }
//
//     getCurrent(): Element {
//         return this.navigator.getCurrent(true) as Element
//     }
//
// }
//
// class Element implements _NavigatorItem {
//     uuid: string
//     name: string
//     constructor(name: string) {
//         this.uuid = uuid()
//         this.name = name
//     }
// }
//
//
// let navTest = new NavTest()
//
// let itemA = new Element("[A], Je suis un élément")
// let itemB = new Element("[B], Je suis un élément")
// let itemC = new Element("[C], Je suis un élément")
// let itemD = new Element("[D], Je suis un élément")
// let itemE = new Element("[E], Je suis un élément")
// let itemF = new Element("[F], Je suis un élément")
// let itemG = new Element("[G], Je suis un élément")
//
// navTest.addItem(itemA)
// navTest.addItem(itemB)
// navTest.addItem(itemC)
// navTest.addItem(itemD)
// navTest.addItem(itemE)
// navTest.addItem(itemF)
// navTest.addItem(itemG)
//
// console.log(navTest)
//
// navTest.removeItem(itemC)
//
// console.log(navTest)
//
// console.log("current", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.next(itemE)
// navTest.navigator.next(itemG)
// navTest.navigator.next(itemD)
// console.log("current 2", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.prev()
// console.log("current 3", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.next(itemF)
// console.log("current 4", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.next(itemA)
// console.log("current 5", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.next(itemB)
// console.log("current 6", navTest.getCurrent().name, navTest.navigator.cursor)
//
// navTest.navigator.prev(4)
// console.log("current 7", navTest.getCurrent().name, navTest.navigator.cursor)
//
