import { Text } from '@/lib/Text'
import { provideIcon } from '@/lib/provideIcon'
import { type ReactNode } from 'react'
import styles from './Card.module.css'

const iconProps = { size: 32 } as const

type IconTypePropsTuple = Parameters<typeof provideIcon<typeof iconProps>>
type IconType = IconTypePropsTuple[0]

interface CardProps {
    iconType: IconType
    headline: ReactNode
    subheader: ReactNode
    children: ReactNode
}

function Card({ iconType, headline, subheader, children }: CardProps) {
    return (
        <section className={styles.card}>
            {provideIcon(iconType, iconProps)(styles.icon)}
            <Text typography={'headline-s'} align={'center'} weight={'medium'} as={'h2'}>
                {headline}
            </Text>
            <Text typography={'subheader-l'} align={'center'} as={'p'}>
                {subheader}
            </Text>
            {children}
        </section>
    )
}

export default Card
