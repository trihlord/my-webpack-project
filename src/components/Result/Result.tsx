import { Text } from '@/lib/Text'
import { HelpOutline } from '@/lib/icons'
import styles from './Result.module.css'

function Result() {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                <HelpOutline size={32} />
            </div>
            <Text typography={'headline-s'} weight={'medium'}>
                No Items
            </Text>
            <Text typography={'subheader-l'}>
                No items still exist. Please create a new item first.
            </Text>
        </div>
    )
}

export default Result
