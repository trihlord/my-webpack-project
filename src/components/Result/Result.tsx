import { Text } from '@/lib/Text'
import { provideIcon } from '@/lib/provideIcon'
import { type ReactNode } from 'react'
import styles from './Result.module.css'

const iconProps = { size: 32 } as const

type IconTypePropsTuple = Parameters<typeof provideIcon<typeof iconProps>>
type IconType = IconTypePropsTuple[0]

interface ResultProps {
    iconType: IconType
    headline: ReactNode
    subheader: ReactNode
}

function Result({ iconType, headline, subheader }: ResultProps) {
    return (
        <div className={styles.result}>
            {provideIcon(iconType, iconProps)(styles.icon)}
            <Text typography={'headline-s'} align={'center'} weight={'medium'}>
                {headline}
            </Text>
            <Text typography={'subheader-l'} align={'center'}>
                {subheader}
            </Text>
        </div>
    )
}

export default Result
