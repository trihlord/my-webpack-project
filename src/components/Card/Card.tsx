import type { ReactNode } from 'react'

import { Text } from '@/lib/Text'
import { provideIcon } from '@/lib/provideIcon'

import styles from './Card.module.css'

const iconProps = { size: 32 } as const

type IconTypePropsTuple = Parameters<typeof provideIcon<typeof iconProps>>
type IconType = IconTypePropsTuple[0]

interface CardProps {
    children: ReactNode
    headline: ReactNode
    iconType: IconType
    subheader: ReactNode
}

function Card({ children, headline, iconType, subheader }: CardProps) {
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

export default Card
