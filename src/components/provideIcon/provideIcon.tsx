import type { NamedExoticComponent } from 'react'

import cn from 'classnames'

import styles from './provideIcon.module.css'

export function provideIcon<P extends object>(Component: NamedExoticComponent<P>, props: P) {
    function ProvideIcon(className: string) {
        return (
            <span className={cn(styles.provideIcon, className)}>
                <Component {...props} />
            </span>
        )
    }
    ProvideIcon.displayName = `ProvideIcon(${Component.displayName})`
    return ProvideIcon
}
