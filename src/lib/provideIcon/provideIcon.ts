import type { ExoticComponent } from 'react'

import cn from 'classnames'
import { createElement } from 'react'

import styles from './provideIcon.module.css'

export function provideIcon<P extends object>(type: ExoticComponent<P>, props: P) {
    return (className: string) =>
        createElement(
            'span',
            { className: cn(styles.provideIcon, className) },
            createElement(type, props)
        )
}
