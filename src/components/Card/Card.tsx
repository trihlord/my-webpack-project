import type { ReactNode } from 'react'

import { provideIcon } from '@/components/provideIcon'
import { Text } from '@/lib/Text'

import styles from './Card.module.css'

const iconProps = { size: 32 } as const

type IconTypePropsTuple = Parameters<typeof provideIcon<typeof iconProps>>
type IconType = IconTypePropsTuple[0]

export interface CardProps {
    children: ReactNode
    headline: ReactNode
    iconType: IconType
    subheader: ReactNode
}

export function Card({ children, headline, iconType, subheader }: CardProps) {
    return (
        <section className={styles.card}>
            {provideIcon(iconType, iconProps)(styles.icon)}
            <Text align={'center'} as={'h2'} typography={'headline-s'} weight={'medium'}>
                {headline}
            </Text>
            <Text align={'center'} as={'p'} typography={'subheader-l'}>
                {subheader}
            </Text>
            {children}
        </section>
    )
}
