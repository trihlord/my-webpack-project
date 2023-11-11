import { createElement, type ExoticComponent } from 'react'

export function provideIcon<P extends object>(type: ExoticComponent<P>, props: P) {
    return (className: string) => createElement('span', { className }, createElement(type, props))
}
