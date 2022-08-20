type _Options = {
    type: string,
    value?: any,
    label?: string,
    bottom?: boolean
}

type _Observer = {
    observers: Function[],
    $on: Function,
    $emit(...arg: any[]): void
    unset(observer: Function): void,
}