import { createElement, type ExoticComponent } from 'react'

export function provideIcon<P extends object>(icon: ExoticComponent<P>, props: P) {
    return (className: string) => createElement('span', { className }, createElement(icon, props))
}
